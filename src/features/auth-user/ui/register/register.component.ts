import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
    AbstractControl,
    NonNullableFormBuilder,
    ReactiveFormsModule,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { UserStore } from '@entities/user';

import { RouteBuilder } from '@shared/config';
import { AppLinkComponent } from '@shared/ui/app-link';
import { ButtonComponent } from '@shared/ui/button';
import { InputComponent } from '@shared/ui/input';

import { AuthService } from '../../model/auth-user.service';

const passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
};

@Component({
    selector: 'app-register',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './register.component.html',
    styleUrl: './register.component.scss',
    imports: [ReactiveFormsModule, RouterLink, InputComponent, ButtonComponent, AppLinkComponent],
})
export class RegisterComponent {
    private readonly fb = inject(NonNullableFormBuilder);
    private readonly authService = inject(AuthService);
    private readonly userStore = inject(UserStore);
    private readonly router = inject(Router);

    private readonly destroyRef = inject(DestroyRef);

    readonly isLoading = signal<boolean>(false);
    readonly errorMessage = signal<string | null>(null);

    protected readonly form = this.fb.group(
        {
            username: [
                '',
                [
                    Validators.required,
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(30),
                ],
            ],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required]],
        },
        { validators: passwordMatchValidator },
    );

    protected onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.isLoading.set(true);
        this.errorMessage.set(null);

        const { username, email, password } = this.form.getRawValue();

        this.authService
            .register({ username, email, password })
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (user) => {
                    this.userStore.setAuthUser(user);
                    this.isLoading.set(false);
                    this.router.navigate([RouteBuilder.HOME()]);
                },
                error: (err) => {
                    this.isLoading.set(false);
                    this.errorMessage.set(err.error?.message || 'Произошла ошибка при регистрации');
                },
            });
    }
}

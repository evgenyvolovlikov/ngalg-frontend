import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { UserStore } from '@entities/user';

import { RouteBuilder } from '@shared/config';
import { AppLinkComponent } from '@shared/ui/app-link';
import { ButtonComponent } from '@shared/ui/button';
import { InputComponent } from '@shared/ui/input';

import { AuthService } from '../../model/auth.service';

export interface LoginCredentials {
    email: string;
    password: string;
}

@Component({
    selector: 'app-login',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [ReactiveFormsModule, RouterLink, InputComponent, ButtonComponent, AppLinkComponent],
})
export class LoginComponent {
    private readonly fb = inject(NonNullableFormBuilder);
    private readonly authService = inject(AuthService);
    private readonly userStore = inject(UserStore);
    private readonly router = inject(Router);

    private readonly destroyRef = inject(DestroyRef);

    readonly isLoading = signal<boolean>(false);
    readonly errorMessage = signal<string | null>(null);

    protected readonly form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });

    protected onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.isLoading.set(true);
        this.errorMessage.set(null);

        const { email, password } = this.form.getRawValue();

        this.authService
            .login({ email, password })
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (user) => {
                    this.userStore.setAuthUser(user);
                    this.isLoading.set(false);
                    this.router.navigate([RouteBuilder.HOME()]);
                },

                error: (err) => {
                    this.isLoading.set(false);
                    this.errorMessage.set(err.error?.message || 'Неверный email или пароль');
                },
            });
    }
}

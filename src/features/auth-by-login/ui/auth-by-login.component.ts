import { ChangeDetectionStrategy, Component, inject, output, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonComponent } from '@shared/ui/button';
import { InputComponent } from '@shared/ui/input';
import { LinkComponent } from '@shared/ui/link';

import { LoginRequestDto } from '../model/auth-by-login.types';

@Component({
    selector: 'app-auth-login-form',
    standalone: true,
    templateUrl: './auth-login-form.component.html',
    styleUrl: './auth-login-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, InputComponent, LinkComponent, ButtonComponent],
})
export class AuthLoginFormComponent {
    private readonly fb = inject(NonNullableFormBuilder);

    readonly isLoading = signal<boolean>(false);
    readonly serverError = signal<string | null>(null);

    readonly submitted = output<LoginRequestDto>();

    protected readonly form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
    });

    protected getErrorMessage(controlName: keyof typeof this.form.controls): string | null {
        const control = this.form.controls[controlName];

        if (!control || (!control.touched && !control.dirty)) {
            return null;
        }

        if (control.hasError('required')) {
            return 'Это поле обязательно';
        }

        if (control.hasError('email')) {
            return 'Введите корректный email';
        }

        if (control.hasError('minlength')) {
            const requiredLength = control.getError('minlength').requiredLength;
            return `Минимум ${requiredLength} символов`;
        }

        return null;
    }

    protected onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.isLoading.set(true);

        // Тест
        const data = this.form.getRawValue();
        setTimeout(() => {
            this.isLoading.set(false);
            console.log(console.log(data));
        }, 2000);

        this.serverError.set(null);
    }
}

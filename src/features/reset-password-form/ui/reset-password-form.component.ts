import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonComponent } from '@shared/ui/button';
import { InputComponent } from '@shared/ui/input';
import { LinkComponent } from '@shared/ui/link';

@Component({
    selector: 'app-reset-password-form',
    standalone: true,
    templateUrl: './reset-password-form.component.html',
    styleUrl: './reset-password-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, InputComponent, LinkComponent, ButtonComponent],
})
export class ResetPasswordFormComponent {
    private readonly fb = inject(NonNullableFormBuilder);

    readonly isLoading = signal<boolean>(false);
    readonly isSubmitted = signal<boolean>(false);
    readonly submittedEmail = signal<string>('');
    readonly serverError = signal<string | null>(null);

    protected readonly form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
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

        return null;
    }

    protected onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.isLoading.set(true);
        this.serverError.set(null);

        const { email } = this.form.getRawValue();

        // Имитация API запроса
        setTimeout(() => {
            this.isLoading.set(false);
            this.submittedEmail.set(email);
            this.isSubmitted.set(true);
        }, 1500);
    }

    protected resetState(): void {
        this.isSubmitted.set(false);
        this.form.reset();
    }
}

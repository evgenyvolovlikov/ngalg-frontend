import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import {
    AbstractControl,
    NonNullableFormBuilder,
    ReactiveFormsModule,
    ValidationErrors,
    ValidatorFn,
    Validators,
} from '@angular/forms';

import { ButtonComponent } from '@shared/ui/button';
import { InputComponent } from '@shared/ui/input';
import { LinkComponent } from '@shared/ui/link';

import { RegisterRequestDto } from '../model/register-by-email.model';

const matchPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password && confirmPassword && password !== confirmPassword
        ? { passwordMismatch: true }
        : null;
};

@Component({
    selector: 'app-register-by-email',
    standalone: true,
    templateUrl: './register-by-email.component.html',
    styleUrl: './register-by-email.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, InputComponent, ButtonComponent, LinkComponent],
})
export class RegisterByEmailComponent {
    private readonly fb = inject(NonNullableFormBuilder);

    readonly isLoading = signal<boolean>(false);
    readonly serverError = signal<string | null>(null);

    protected readonly form = this.fb.group(
        {
            name: ['', [Validators.required, Validators.minLength(3)]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(8)]],
            confirmPassword: ['', [Validators.required]],
        },
        { validators: matchPasswordValidator },
    );

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

        if (controlName === 'confirmPassword' && this.form.hasError('passwordMismatch')) {
            return 'Пароли не совпадают';
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

        const dto = this.form.getRawValue();
        const requestData: RegisterRequestDto = {
            name: dto.name,
            email: dto.email,
            password: dto.password,
        };

        setTimeout(() => {
            this.isLoading.set(false);
            console.log('Успешный API запрос:', requestData);
        }, 1500);
    }
}

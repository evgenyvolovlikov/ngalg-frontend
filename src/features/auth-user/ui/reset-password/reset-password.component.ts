import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { AppLinkComponent } from '@shared/ui/app-link';
import { ButtonComponent } from '@shared/ui/button';
import { IconComponent } from '@shared/ui/icon';
import { InputComponent } from '@shared/ui/input';

export interface ResetPasswordCredentials {
    email: string;
}

@Component({
    selector: 'app-reset-password',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './reset-password.component.html',
    styleUrl: './reset-password.component.scss',
    imports: [
        ReactiveFormsModule,
        RouterLink,
        InputComponent,
        ButtonComponent,
        AppLinkComponent,
        IconComponent,
    ],
})
export class ResetPasswordComponent {
    private readonly fb = inject(NonNullableFormBuilder);

    readonly isLoading = input<boolean>(false);
    readonly errorMessage = input<string | null>(null);

    readonly submitReset = output<ResetPasswordCredentials>();

    protected readonly isSubmitted = signal<boolean>(false);
    protected readonly submittedEmail = signal<string>('');

    protected readonly form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
    });

    protected onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        const email = this.form.controls.email.value;
        this.submittedEmail.set(email);
        this.isSubmitted.set(true);

        this.submitReset.emit({ email });
    }

    protected resetState(): void {
        this.form.reset();
        this.isSubmitted.set(false);
        this.submittedEmail.set('');
    }
}

import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ButtonComponent } from '@shared/ui/button';
import { ModalComponent } from '@shared/ui/modal';

@Component({
    selector: 'app-course-feedback',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-feedback.component.html',
    styleUrl: './course-feedback.component.scss',
    imports: [ReactiveFormsModule, ButtonComponent, ModalComponent],
})
export class FeedbackModalComponent {
    readonly lessonId = input.required<string>();

    private readonly fb = inject(NonNullableFormBuilder);

    protected readonly isModalOpen = signal<boolean>(false);
    protected readonly isSubmitting = signal<boolean>(false);
    protected readonly isSuccess = signal<boolean>(false);

    protected readonly form = this.fb.group({
        message: ['', [Validators.required, Validators.minLength(10)]],
    });

    protected openModal(): void {
        this.isSuccess.set(false);
        this.form.reset();
        this.isModalOpen.set(true);
    }

    protected closeModal(): void {
        this.isModalOpen.set(false);
    }

    protected onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.isSubmitting.set(true);

        setTimeout(() => {
            console.log(
                'Feedback sent for lesson:',
                this.lessonId(),
                'Message:',
                this.form.getRawValue().message,
            );
            this.isSubmitting.set(false);
            this.isSuccess.set(true);

            setTimeout(() => this.closeModal(), 1500);
        }, 1000);
    }
}

import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from '@shared/ui/button';
import { CheckboxComponent } from '@shared/ui/checkbox';
import { InputComponent } from '@shared/ui/input';
import { TextareaComponent } from '@shared/ui/textarea';

import { CourseFormModel } from '../../model/course-form.types';

@Component({
    selector: 'app-course-form',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        ButtonComponent,
        InputComponent,
        TextareaComponent,
        CheckboxComponent,
    ],
    templateUrl: './course-form.component.html',
    styleUrl: './course-form.component.scss',
})
export class CourseFormComponent {
    readonly form = input.required<FormGroup<CourseFormModel>>();
    readonly isEditMode = input<boolean>(false);
    readonly isSubmitting = input<boolean>(false);

    readonly save = output<void>();
    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly cancel = output<void>();

    protected onSubmit(): void {
        if (this.form().invalid) {
            this.form().markAllAsTouched();
            return;
        }
        this.save.emit();
    }
}

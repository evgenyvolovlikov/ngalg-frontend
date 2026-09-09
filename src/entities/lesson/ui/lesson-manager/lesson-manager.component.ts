import {
    ChangeDetectionStrategy,
    Component,
    effect,
    inject,
    input,
    output,
    signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import {
    CourseSkeletonLesson,
    CreateLessonDto,
    LessonDetail,
    UpdateLessonDto,
} from '@shared/types';
import { ButtonComponent } from '@shared/ui/button';
import { CheckboxComponent } from '@shared/ui/checkbox';
import { InputComponent } from '@shared/ui/input';
import { ModalComponent } from '@shared/ui/modal';
import { TextareaComponent } from '@shared/ui/textarea';

@Component({
    selector: 'app-lesson-manager',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        ReactiveFormsModule,
        ButtonComponent,
        InputComponent,
        TextareaComponent,
        CheckboxComponent,
        ModalComponent,
    ],
    templateUrl: './lesson-manager.component.html',
    styleUrl: './lesson-manager.component.scss',
})
export class LessonManagerComponent {
    private readonly fb = inject(FormBuilder).nonNullable;

    readonly lessons = input.required<CourseSkeletonLesson[]>();
    readonly lessonToEdit = input<LessonDetail | null>(null);

    readonly createLesson = output<CreateLessonDto>();
    readonly updateLesson = output<{ id: string; dto: UpdateLessonDto }>();
    readonly deleteLesson = output<string>();

    readonly requestEdit = output<string>();
    readonly cancelEdit = output<void>();

    protected readonly isModalOpen = signal(false);
    protected readonly editingLessonId = signal<string | null>(null);

    protected readonly lessonForm = this.fb.group({
        sequenceOrder: [1, [Validators.required, Validators.min(1)]],
        title: ['', [Validators.required]],
        description: [''],
        videoUrl: [''],
        durationSeconds: [0, [Validators.min(0)]],
        isFree: [false],
        hasCodeEditor: [false],
    });

    constructor() {
        effect(() => {
            const detail = this.lessonToEdit();
            if (detail) {
                this.editingLessonId.set(detail.id);
                this.lessonForm.patchValue({
                    sequenceOrder: detail.sequenceOrder,
                    title: detail.title,
                    description: detail.description ?? '',
                    videoUrl: detail.videoUrl ?? '',
                    durationSeconds: Math.round(Number(detail.durationSeconds) / 60),
                    isFree: detail.isFree,
                    hasCodeEditor: detail.hasCodeEditor,
                });
                this.isModalOpen.set(true);
            }
        });
    }

    protected openCreateModal(): void {
        this.editingLessonId.set(null);
        this.lessonForm.reset({ sequenceOrder: this.lessons().length + 1 });
        this.isModalOpen.set(true);
    }

    protected openEditModal(lesson: CourseSkeletonLesson): void {
        this.editingLessonId.set(lesson.id);
        this.lessonForm.patchValue({
            sequenceOrder: lesson.sequenceOrder,
            title: lesson.title,
            description: lesson.description ?? '',
            durationSeconds: Math.round(Number(lesson.durationSeconds) / 60),
            isFree: lesson.isFree,
            hasCodeEditor: lesson.hasCodeEditor,
        });
        this.isModalOpen.set(true);
    }

    protected closeModal(): void {
        this.isModalOpen.set(false);
        this.editingLessonId.set(null);
        this.cancelEdit.emit();
    }

    protected submitLesson(): void {
        if (this.lessonForm.invalid) return;

        const raw = this.lessonForm.getRawValue();

        const dto = {
            ...raw,
            sequenceOrder: Math.round(Number(raw.sequenceOrder)) || 1,
            durationSeconds: Math.round(Number(raw.durationSeconds) * 60) || 0,
        };

        const editingId = this.editingLessonId();

        if (editingId) {
            this.updateLesson.emit({ id: editingId, dto: dto });
        } else {
            this.createLesson.emit(dto);
        }
        this.closeModal();
    }
}

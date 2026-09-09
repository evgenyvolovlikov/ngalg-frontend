import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import { LessonEntity } from '@shared/types';

import { CourseFormModel, LessonFormModel } from './course-form.types';

export function createInitialCourseForm(fb: NonNullableFormBuilder): FormGroup<CourseFormModel> {
    return fb.group<CourseFormModel>({
        title: fb.control('', [Validators.required, Validators.minLength(3)]),
        slug: fb.control('', [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]),
        description: fb.control('', [Validators.required]),
        isPublished: fb.control(false),
    });
}

export function createLessonForm(
    fb: NonNullableFormBuilder,
    initialData?: Partial<LessonEntity>,
): FormGroup<LessonFormModel> {
    return fb.group<LessonFormModel>({
        id: fb.control(initialData?.id ?? null),
        sequenceOrder: fb.control(initialData?.sequenceOrder ?? 1, [
            Validators.required,
            Validators.min(1),
        ]),
        title: fb.control(initialData?.title ?? '', [Validators.required]),
        description: fb.control(initialData?.description ?? ''),
        videoUrl: fb.control(initialData?.videoUrl ?? ''),
        durationSeconds: fb.control(initialData?.durationSeconds ?? 0, [Validators.min(0)]),
        isFree: fb.control(initialData?.isFree ?? false),
        hasCodeEditor: fb.control(initialData?.hasCodeEditor ?? false),
    });
}

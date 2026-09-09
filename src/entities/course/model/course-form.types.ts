import { FormControl } from '@angular/forms';

export interface CourseFormModel {
    title: FormControl<string>;
    slug: FormControl<string>;
    description: FormControl<string>;
    isPublished: FormControl<boolean>;
}

export interface LessonFormModel {
    id: FormControl<string | null>;
    sequenceOrder: FormControl<number>;
    title: FormControl<string>;
    description: FormControl<string>;
    videoUrl: FormControl<string>;
    durationSeconds: FormControl<number>;
    isFree: FormControl<boolean>;
    hasCodeEditor: FormControl<boolean>;
}

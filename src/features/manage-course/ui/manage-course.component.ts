import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    OnInit,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { finalize } from 'rxjs';

import { CourseApiService, CourseFormComponent, createInitialCourseForm } from '@entities/course';
import { LessonApiService, LessonManagerComponent } from '@entities/lesson';

import {
    CourseSkeletonLesson,
    CreateCourseDto,
    CreateLessonDto,
    LessonDetail,
    UpdateCourseDto,
    UpdateLessonDto,
} from '@shared/types';

@Component({
    selector: 'app-manage-course',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, CourseFormComponent, LessonManagerComponent],
    templateUrl: './manage-course.component.html',
    styleUrl: './manage-course.component.scss',
})
export class ManageCourseComponent implements OnInit {
    readonly courseSlug = input<string | null>(null);

    private readonly fb = inject(NonNullableFormBuilder);
    private readonly router = inject(Router);
    private readonly courseApi = inject(CourseApiService);
    private readonly lessonApi = inject(LessonApiService);
    private readonly destroyRef = inject(DestroyRef);

    protected readonly isSubmitting = signal(false);
    protected readonly courseId = signal<string | null>(null);
    protected readonly activeCourseSlug = signal<string | null>(null);
    protected readonly lessons = signal<CourseSkeletonLesson[]>([]);

    protected readonly courseForm = createInitialCourseForm(this.fb);
    protected readonly isEditMode = computed(() => !!this.courseSlug());

    protected readonly editingLessonDetail = signal<LessonDetail | null>(null);

    protected handleRequestEdit(lessonId: string): void {
        this.lessonApi
            .getLessonDetail(lessonId)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (detail) => this.editingLessonDetail.set(detail),
                error: (err) => console.error('Ошибка загрузки деталей урока', err),
            });
    }

    protected handleCancelEdit(): void {
        this.editingLessonDetail.set(null);
    }

    protected handleCreateLesson(dto: CreateLessonDto): void {
        const cId = this.courseId();
        if (!cId) return;

        this.lessonApi
            .createLesson(cId, dto)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: () => this.reloadLessons(),
                error: (err) => console.error('Ошибка создания урока', err),
            });
    }

    protected handleUpdateLesson(payload: { id: string; dto: UpdateLessonDto }): void {
        this.lessonApi
            .updateLesson(payload.id, payload.dto)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: () => {
                    this.editingLessonDetail.set(null); // Обязательный сброс
                    this.reloadLessons();
                },
                error: (err) => console.error('Ошибка обновления урока', err),
            });
    }

    protected handleDeleteLesson(lessonId: string): void {
        this.lessonApi
            .deleteLesson(lessonId)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: () => this.reloadLessons(),
                error: (err) => console.error('Ошибка удаления урока', err),
            });
    }

    ngOnInit(): void {
        const slug = this.courseSlug();
        if (slug) {
            this.loadCourseData(slug);
        }
    }

    private loadCourseData(slug: string): void {
        this.courseApi
            .getCourseSkeleton(slug)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (skeleton) => {
                    this.courseId.set(skeleton.id);
                    this.activeCourseSlug.set(skeleton.slug);
                    this.courseForm.patchValue({
                        title: skeleton.title,
                        slug: skeleton.slug,
                        description: skeleton.description,
                        isPublished: skeleton.isPublished,
                    });
                    this.lessons.set(skeleton.lessons);
                },
                error: (err) => console.error('Ошибка загрузки курса', err),
            });
    }

    protected handleSaveCourse(): void {
        if (this.courseForm.invalid) return;

        const dto = this.courseForm.getRawValue();
        this.isSubmitting.set(true);

        const request$ = this.isEditMode()
            ? this.courseApi.updateCourse(this.courseId()!, dto as UpdateCourseDto)
            : this.courseApi.createCourse(dto as CreateCourseDto);

        request$
            .pipe(
                finalize(() => this.isSubmitting.set(false)),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe({
                next: (res) => {
                    this.router.navigate(['/courses', res.slug]);
                },
                error: (err) => console.error('Ошибка сохранения курса', err),
            });
    }

    private reloadLessons(): void {
        const slug = this.activeCourseSlug();
        if (slug) this.loadCourseData(slug);
    }

    protected handleCancel(): void {
        const slug = this.activeCourseSlug();
        this.router.navigate(slug ? ['/courses', slug] : ['/courses']);
    }
}

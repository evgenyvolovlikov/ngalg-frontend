import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { CourseProgressComponent, MOCK_LESSONS } from '@entities/course';
import { Lesson, LessonNavItemComponent } from '@entities/lesson';

@Component({
    selector: 'app-course-sidebar',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'course-sidebar.component.html',
    styleUrl: 'course-sidebar.component.scss',
    imports: [CourseProgressComponent, LessonNavItemComponent],
})
export class CourseSidebarComponent {
    readonly lessons = input<Lesson[]>(MOCK_LESSONS);
    readonly activeLessonId = input<string | null>(null);

    readonly selectLesson = output<Lesson>();

    protected readonly totalCount = computed(() => this.lessons().length);

    protected readonly watchedCount = computed(
        () => this.lessons().filter((lesson) => lesson.isWatched).length,
    );

    protected onLessonSelect(lesson: Lesson): void {
        if (!lesson.isLocked) {
            this.selectLesson.emit(lesson);
        }
    }
}

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { MOCK_LESSONS } from '@entities/course';
import { LessonWorkspaceComponent } from '@widgets/lesson-workspace';

@Component({
    selector: 'app-course-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'course-page.component.html',
    styleUrl: 'course-page.component.scss',
    imports: [LessonWorkspaceComponent],
})
export class CoursePageComponent {
    protected readonly courseLesson = signal(MOCK_LESSONS[0] as any);
}

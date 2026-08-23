import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-course-update-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'course-update-page.component.html',
    styleUrl: 'course-update-page.component.scss',
})
export class CourseUpdatePageComponent {}

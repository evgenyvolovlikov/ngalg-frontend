import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-course-create-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'course-create-page.component.html',
    styleUrl: 'course-create-page.component.scss',
})
export class CourseCreatePageComponent {}

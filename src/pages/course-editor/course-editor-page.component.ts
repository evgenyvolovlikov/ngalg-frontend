import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ManageCourseComponent } from '@features/manage-course';

@Component({
    selector: 'app-course-editor-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ManageCourseComponent],
    template: `<app-manage-course [courseSlug]="slug() || null" />`,
})
export class CourseEditorPageComponent {
    readonly slug = input<string | undefined>();
}

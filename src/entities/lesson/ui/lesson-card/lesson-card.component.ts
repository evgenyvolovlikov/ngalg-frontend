import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CourseSkeletonLesson } from '@shared/types';
import { ButtonComponent } from '@shared/ui/button';
import { IconComponent } from '@shared/ui/icon';

@Component({
    selector: 'app-lesson-card',
    standalone: true,
    imports: [NgClass, IconComponent, ButtonComponent],
    templateUrl: './lesson-card.component.html',
    styleUrl: './lesson-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LessonCardComponent {
    readonly lesson = input.required<CourseSkeletonLesson>();
    readonly isActive = input<boolean>(false);
}

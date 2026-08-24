import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BadgeComponent } from '@shared/ui/badge';
import { IconComponent } from '@shared/ui/icon';

import { Lesson } from '../../model/lesson.types';

@Component({
    selector: 'app-lesson-nav-item',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './lesson-nav-item.component.html',
    styleUrl: './lesson-nav-item.component.scss',
    imports: [BadgeComponent, IconComponent],
})
export class LessonNavItemComponent {
    readonly lesson = input.required<Lesson>();
    readonly isActive = input<boolean>(false);
}

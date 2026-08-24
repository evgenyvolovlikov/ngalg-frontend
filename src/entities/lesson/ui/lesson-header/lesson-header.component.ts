import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { BadgeComponent } from '@shared/ui/badge';
import { IconComponent } from '@shared/ui/icon';

import { Lesson } from '../../model/lesson.types';

@Component({
    selector: 'app-lesson-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './lesson-header.component.html',
    styleUrl: './lesson-header.component.scss',
    imports: [IconComponent, BadgeComponent],
})
export class LessonHeaderComponent {
    readonly lesson = input.required<Lesson>();
}

import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { CourseSkeletonLesson } from '@shared/types';
import { ButtonComponent } from '@shared/ui/button';

@Component({
    selector: 'app-lesson-navigation-controls',
    standalone: true,
    imports: [ButtonComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="navigation-controls">
            @if (nextLesson(); as next) {
                <button
                    app-button
                    type="button"
                    variant="filled"
                    [disabled]="!next.isFree && !next.isCompleted"
                    (click)="nextLessonSelect.emit(next.id)"
                >
                    Следующий урок: {{ next.title }} →
                </button>
            }
        </div>
    `,
    styles: [
        `
            .navigation-controls {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: var(--unit-4);
            }
        `,
    ],
})
export class LessonNavigationControlsComponent {
    readonly nextLesson = input<CourseSkeletonLesson | null>(null);
    readonly nextLessonSelect = output<string>();

    /* Удален неиспользуемый backToIndex */
}

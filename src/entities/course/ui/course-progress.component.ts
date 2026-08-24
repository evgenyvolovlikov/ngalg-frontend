import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { ProgressRingComponent } from '@shared/ui/progress-ring';

@Component({
    selector: 'app-course-progress',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './course-progress.component.html',
    styleUrl: './course-progress.component.scss',
    imports: [ProgressRingComponent],
})
export class CourseProgressComponent {
    readonly total = input.required<number>();
    readonly watched = input.required<number>();

    protected readonly percentage = computed(() => {
        const totalVideos = this.total();
        if (totalVideos === 0) return 0;

        const rawPercentage = (this.watched() / totalVideos) * 100;
        return Math.max(0, Math.min(100, Math.round(rawPercentage)));
    });
}

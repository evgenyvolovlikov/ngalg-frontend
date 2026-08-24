import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
    selector: 'app-progress-ring',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './progress-ring.component.html',
    styleUrl: './progress-ring.component.scss',
})
export class ProgressRingComponent {
    readonly progress = input<number>(0);
    readonly size = input<number>(140);
    readonly strokeWidth = input<number>(10);

    protected readonly radius = computed(() => (this.size() - this.strokeWidth()) / 2);

    protected readonly circumference = computed(() => 2 * Math.PI * this.radius());

    protected readonly dashOffset = computed(() => {
        const clampedProgress = Math.max(0, Math.min(100, this.progress()));
        return this.circumference() - (clampedProgress / 100) * this.circumference();
    });
}

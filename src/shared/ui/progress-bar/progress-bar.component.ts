import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
    selector: 'app-progress-bar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.scss',
})
export class ProgressBarComponent {
    /** Процент выполнения (0-100) */
    readonly value = input.required<number>();

    /** Безопасное значение progress в диапазоне 0..100 */
    protected readonly clampedValue = computed(() => Math.min(100, Math.max(0, this.value())));
}

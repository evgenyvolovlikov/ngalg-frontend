import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { BadgeColor, BadgeVariant } from './badge.types';

@Component({
    selector: 'app-badge',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './badge.component.html',
    styleUrl: './badge.component.scss',
})
export class BadgeComponent {
    readonly variant = input<BadgeVariant>('soft');
    readonly color = input<BadgeColor>('neutral');

    protected readonly badgeClasses = computed(
        () => `badge--${this.variant()} badge--${this.color()}`,
    );
}

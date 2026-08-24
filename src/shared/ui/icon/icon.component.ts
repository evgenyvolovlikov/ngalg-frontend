import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { IconSize } from './icon.types';

@Component({
    selector: 'app-icon',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './icon.component.html',
    styleUrl: './icon.component.scss',
})
export class IconComponent {
    readonly name = input.required<string>();
    readonly size = input<IconSize>('inherit');

    protected readonly iconClasses = computed(() => `icon icon--${this.size()}`);
}

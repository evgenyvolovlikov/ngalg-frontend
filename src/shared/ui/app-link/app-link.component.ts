import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type LinkVariant = 'primary' | 'secondary' | 'underline';
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

@Component({
    selector: 'a[app-link]',
    standalone: true,
    template: '<ng-content />',
    styleUrl: './app-link.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class]': '"app-link app-link--" + variant()',
        '[attr.target]': 'target()',
        '[attr.rel]': 'relValue()',
    },
})
export class AppLinkComponent {
    readonly variant = input<LinkVariant>('primary');
    readonly target = input<LinkTarget>('_self');
    readonly rel = input<string | null>(null);

    protected readonly relValue = computed(() => {
        if (this.target() === '_blank') {
            return this.rel() ?? 'noopener noreferrer';
        }
        return this.rel();
    });
}

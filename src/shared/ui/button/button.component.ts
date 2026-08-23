import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonType = 'button' | 'submit' | 'reset';

@Component({
    selector: 'app-button',
    standalone: true,
    templateUrl: './button.component.html',
    styleUrl: './button.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.app-button-host--full-width]': 'fullWidth()',
    },
})
export class ButtonComponent {
    readonly variant = input<ButtonVariant>('primary');
    readonly size = input<ButtonSize>('md');
    readonly type = input<ButtonType>('button');
    readonly disabled = input<boolean>(false);
    readonly loading = input<boolean>(false);
    readonly fullWidth = input<boolean>(false);

    protected readonly isDisabled = computed(() => this.disabled() || this.loading());

    protected readonly buttonClasses = computed(() =>
        [
            'button',
            `button--${this.variant()}`,
            `button--${this.size()}`,
            this.loading() ? 'button--loading' : '',
        ]
            .filter(Boolean)
            .join(' '),
    );
}

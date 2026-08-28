import { Component, computed, input } from '@angular/core';

export type ButtonVariant = 'clear' | 'outline' | 'filled';
export type ButtonSize = 'm' | 'l' | 'xl';

@Component({
    selector: 'button[app-button], a[app-button]',
    standalone: true,
    template: `
        @if (loading()) {
            <span class="app-button__loader" aria-hidden="true"></span>
        }
        <span class="app-button__content" [class.app-button__content--hidden]="loading()">
            <ng-content></ng-content>
        </span>
    `,
    styleUrl: './button.component.scss',
    host: {
        class: 'app-button',
        '[class.app-button--variant-clear]': 'variant() === "clear"',
        '[class.app-button--variant-outline]': 'variant() === "outline"',
        '[class.app-button--variant-filled]': 'variant() === "filled"',
        '[class.app-button--size-m]': 'size() === "m"',
        '[class.app-button--size-l]': 'size() === "l"',
        '[class.app-button--size-xl]': 'size() === "xl"',
        '[class.app-button--full-width]': 'fullWidth()',
        '[class.app-button--disabled]': 'isDisabled()',
        '[class.app-button--loading]': 'loading()',
        // Управляем нативными атрибутами
        '[attr.disabled]': 'isDisabled() ? true : null',
        '[attr.aria-busy]': 'loading() ? "true" : null',
    },
})
export class ButtonComponent {
    variant = input<ButtonVariant>('filled');
    size = input<ButtonSize>('m');
    loading = input<boolean>(false);
    disabled = input<boolean>(false);
    fullWidth = input<boolean>(false);

    isDisabled = computed(() => this.disabled() || this.loading());
}

import { DOCUMENT } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    Renderer2,
    effect,
    inject,
    signal,
} from '@angular/core';

import { ToggleThemeComponent } from '@features/toggle-theme';

import { LinkComponent } from '@shared/ui/link';

import { HEADER_NAV_LINKS } from '../config/header-nav.config';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [LinkComponent, ToggleThemeComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private readonly document = inject(DOCUMENT);
    private readonly renderer = inject(Renderer2);
    private readonly destroyRef = inject(DestroyRef);

    readonly isMenuOpen = signal(false);
    protected readonly menuElements = HEADER_NAV_LINKS;

    constructor() {
        effect((onCleanup) => {
            if (this.isMenuOpen()) {
                this.renderer.setStyle(this.document.body, 'overflow', 'hidden');
            } else {
                this.renderer.removeStyle(this.document.body, 'overflow');
            }

            onCleanup(() => {
                this.renderer.removeStyle(this.document.body, 'overflow');
            });
        });

        this.destroyRef.onDestroy(() => {
            this.renderer.removeStyle(this.document.body, 'overflow');
        });
    }

    toggleMenu(): void {
        this.isMenuOpen.update((open) => !open);
    }

    closeMenu(): void {
        this.isMenuOpen.set(false);
    }
}

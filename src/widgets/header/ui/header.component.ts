import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

import { LinkComponent } from '@shared/ui/link/link.component';

import { HEADER_NAV_LINKS } from '../config/header-nav.config';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [LinkComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    readonly isMenuOpen = signal(false);

    protected readonly menuElements = signal(HEADER_NAV_LINKS);

    constructor() {
        effect(() => {
            if (typeof document !== 'undefined') {
                document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
            }
        });
    }

    toggleMenu(): void {
        this.isMenuOpen.update((open) => !open);
    }

    closeMenu(): void {
        this.isMenuOpen.set(false);
    }
}

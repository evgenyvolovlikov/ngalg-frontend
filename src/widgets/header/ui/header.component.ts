import { DOCUMENT } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    HostListener,
    Renderer2,
    effect,
    inject,
    signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { ToggleThemeComponent } from '@features/toggle-theme';

import { UserStore } from '@entities/user';

import { MAIN_NAV_ITEMS, RouteBuilder } from '@shared/config';
import { AppLinkComponent } from '@shared/ui/app-link';
import { ButtonComponent } from '@shared/ui/button';
import { IconComponent } from '@shared/ui/icon';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, AppLinkComponent, ToggleThemeComponent, ButtonComponent, IconComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
    private readonly document = inject(DOCUMENT);
    private readonly renderer = inject(Renderer2);
    private readonly router = inject(Router);
    private readonly userStore = inject(UserStore);

    readonly currentUser = this.userStore.currentAuthUser;
    readonly isMenuOpen = signal(false);
    protected readonly menuElements = MAIN_NAV_ITEMS;

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
    }

    @HostListener('window:keydown.escape')
    onEscapeKey(): void {
        if (this.isMenuOpen()) {
            this.closeMenu();
        }
    }

    navigateLogin(): void {
        this.router.navigate([RouteBuilder.AUTH_LOGIN()]);
    }

    toggleMenu(): void {
        this.isMenuOpen.update((open) => !open);
    }

    closeMenu(): void {
        this.isMenuOpen.set(false);
    }
}

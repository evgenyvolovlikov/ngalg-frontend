import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';

import { filter, map } from 'rxjs/operators';

export type LinkVariant = 'primary' | 'secondary' | 'underline';
export type LinkTarget = '_blank' | '_self' | '_parent' | '_top';

@Component({
    selector: 'app-link',
    standalone: true,
    templateUrl: './link.component.html',
    styleUrl: './link.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
    private readonly router = inject(Router);

    readonly variant = input<LinkVariant>('primary');
    readonly routerLink = input<string | unknown[] | null>(null);
    readonly href = input<string | null>(null);
    readonly target = input<LinkTarget>('_self');
    readonly rel = input<string | null>(null);

    private readonly currentUrl = toSignal(
        this.router.events.pipe(
            filter((e): e is NavigationEnd => e instanceof NavigationEnd),
            map((e) => e.urlAfterRedirects),
        ),
        { initialValue: this.router.url },
    );

    protected readonly url = computed(() => {
        const link = this.routerLink();
        if (link) {
            const commands = Array.isArray(link) ? link : [link];
            return this.router.serializeUrl(this.router.createUrlTree(commands));
        }
        return this.href();
    });

    protected readonly relValue = computed(() => {
        if (this.target() === '_blank') {
            return this.rel() ?? 'noopener noreferrer';
        }
        return this.rel();
    });

    protected readonly isActive = computed(() => {
        const targetUrl = this.url();
        if (!targetUrl || !this.routerLink()) return false;
        return this.currentUrl() === targetUrl;
    });

    protected handleClick(event: MouseEvent): void {
        const link = this.routerLink();

        if (link && !event.ctrlKey && !event.metaKey && !event.shiftKey && event.button === 0) {
            event.preventDefault();
            const commands = Array.isArray(link) ? link : [link];
            this.router.navigate(commands);
        }
    }
}

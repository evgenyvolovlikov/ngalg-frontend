import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type LinkVariant = 'primary' | 'secondary' | 'underline';

@Component({
    selector: 'app-link',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './link.component.html',
    styleUrl: './link.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
    readonly variant = input<LinkVariant>('primary');
    readonly routerLink = input<string | unknown[] | null>(null);
}

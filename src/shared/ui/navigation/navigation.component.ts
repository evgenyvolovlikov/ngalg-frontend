import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

export type NavigationTag = 'THEORY' | 'EXAMPLE' | 'COMPONENT';

export interface NavigationLink {
    id?: string;
    label: string;
    route: string | string[];
    icon?: string;
    tag?: NavigationTag;
    exact?: boolean;
    children?: NavigationLink[];
}

@Component({
    selector: 'app-navigation',
    standalone: true,
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterLink, RouterLinkActive, NavigationComponent],
})
export class NavigationComponent {
    readonly elements = input.required<NavigationLink[]>();
    readonly orientation = input<'horizontal' | 'vertical'>('vertical');
    readonly isSubList = input<boolean>(false);
}

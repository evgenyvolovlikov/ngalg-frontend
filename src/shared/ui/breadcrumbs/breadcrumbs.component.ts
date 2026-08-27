import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AppLinkComponent } from '../app-link';
import { BreadcrumbItem } from './breadcrumbs.types';

@Component({
    selector: 'app-breadcrumbs',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './breadcrumbs.component.html',
    styleUrl: './breadcrumbs.component.scss',
    imports: [RouterLink, AppLinkComponent],
})
export class BreadcrumbsComponent {
    readonly items = input.required<BreadcrumbItem[]>();
}

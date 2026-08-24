import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LinkComponent } from '../link';
import { BreadcrumbItem } from './breadcrumbs.types';

@Component({
    selector: 'app-breadcrumbs',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './breadcrumbs.component.html',
    styleUrl: './breadcrumbs.component.scss',
    imports: [RouterLink, LinkComponent],
})
export class BreadcrumbsComponent {
    readonly items = input.required<BreadcrumbItem[]>();
}

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { NavElement } from '../model/header.types';

@Component({
    selector: 'app-header',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './header.component.html',
    styleUrl: 'header.component.scss',
})
export class HeaderComponent {
    protected readonly menuElements = signal<NavElement[]>([
        {
            id: 1,
            path: '/abc',
            label: 'ABC',
        },
    ]);
}

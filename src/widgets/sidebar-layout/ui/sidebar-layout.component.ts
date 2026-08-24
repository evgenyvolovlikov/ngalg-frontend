import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, Type, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

import { map } from 'rxjs';

@Component({
    selector: 'app-sidebar-layout',
    standalone: true,
    templateUrl: './sidebar-layout.component.html',
    styleUrl: './sidebar-layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, NgComponentOutlet],
})
export class SidebarLayoutComponent {
    private readonly route = inject(ActivatedRoute);
    protected readonly sidebarComponent = toSignal<Type<unknown>>(
        this.route.data.pipe(map((data) => data['sidebarComponent'])),
    );
}

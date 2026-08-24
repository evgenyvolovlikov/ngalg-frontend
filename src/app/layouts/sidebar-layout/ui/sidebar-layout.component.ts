import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-sidebar-layout',
    standalone: true,
    templateUrl: './sidebar-layout.component.html',
    styleUrl: './sidebar-layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet],
})
export class SidebarLayoutComponent {}

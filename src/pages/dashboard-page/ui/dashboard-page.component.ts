import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-dashboard-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,

    templateUrl: 'dashboard-page.component.html',
    styleUrl: 'dashboard-page.component.scss',

    providers: [],
})
export class DashboardPageComponent {}

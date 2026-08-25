import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-profile-overview-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'profile-overview-page.component.html',
    styleUrl: 'profile-overview-page.component.scss',
})
export class ProfileOverviewPageComponent {}

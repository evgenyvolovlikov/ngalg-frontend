import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-profile-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'profile-page.component.html',
    styleUrl: 'profile-page.component.scss',
})
export class ProfilePageComponent {}

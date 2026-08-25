import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-profile-settings-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'profile-settings-page.component.html',
    styleUrl: 'profile-settings-page.component.scss',
})
export class ProfileSettingsPageComponent {}

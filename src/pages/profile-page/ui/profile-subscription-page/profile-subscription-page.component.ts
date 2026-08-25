import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-profile-subscription-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'profile-subscription-page.component.html',
    styleUrl: 'profile-subscription-page.component.scss',
})
export class ProfileSubscriptionPageComponent {}

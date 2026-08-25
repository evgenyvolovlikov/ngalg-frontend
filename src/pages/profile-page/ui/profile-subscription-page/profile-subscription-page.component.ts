import { ChangeDetectionStrategy, Component } from '@angular/core';

import { UserSubscriptionCardComponent } from '@widgets/user-subscription-card';

@Component({
    selector: 'app-profile-subscription-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'profile-subscription-page.component.html',
    styleUrl: 'profile-subscription-page.component.scss',
    imports: [UserSubscriptionCardComponent],
})
export class ProfileSubscriptionPageComponent {}

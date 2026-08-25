import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { UserStore } from '@entities/user';

@Component({
    selector: 'app-subscription-action',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './subscription-action.component.html',
    styleUrl: './subscription-action.component.scss',
})
export class SubscriptionActionComponent {
    private readonly userStore = inject(UserStore);

    public onChangePlan(): void {
        const username = this.userStore.profile()?.username ?? 'Unknown';

        console.warn(`[ManageSubscription] Triggered plan change for user: ${username}`);
    }
}

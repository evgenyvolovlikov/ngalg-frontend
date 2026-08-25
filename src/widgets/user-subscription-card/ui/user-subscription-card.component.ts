import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { UserStore } from '@entities/user';
import { SubscriptionActionComponent } from '@features/manage-subscription';

@Component({
    selector: 'app-user-subscription-card',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-subscription-card.component.html',
    styleUrl: './user-subscription-card.component.scss',
    imports: [SubscriptionActionComponent],
})
export class UserSubscriptionCardComponent {
    private readonly userStore = inject(UserStore);

    public readonly subscription = computed(() => this.userStore.profile()?.subscription);
}

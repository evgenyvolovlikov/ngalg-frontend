import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { UpdateUsernameCardComponent } from '@features/update-username';

import { UserStore } from '@entities/user';

@Component({
    selector: 'app-account-overview-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: ` <app-update-username-card /> `,
    imports: [UpdateUsernameCardComponent],
})
export class AccountOverviewPageComponent {
    private readonly userStore = inject(UserStore);
    protected readonly profile = this.userStore.currentProfile;
}

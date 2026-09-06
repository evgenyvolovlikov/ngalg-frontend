import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { UserStore } from '@entities/user';

@Component({
    selector: 'app-account-overview-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<div>
        <div>
            <h2>Обзор аккаунта</h2>
            @if (profile(); as userProfile) {
                <p><strong>Имя пользователя:</strong> {{ userProfile.username }}</p>
            }
        </div>
    </div> `,
})
export class AccountOverviewPageComponent {
    private readonly userStore = inject(UserStore);
    protected readonly profile = this.userStore.currentProfile;
}

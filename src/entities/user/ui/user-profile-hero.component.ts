import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { UserStore } from '../model/user.store';

@Component({
    selector: 'app-user-profile-hero',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './user-profile-hero.component.html',
    styleUrl: './user-profile-hero.component.scss',
})
export class UserProfileHeroComponent {
    private readonly userStore = inject(UserStore);
    readonly user = this.userStore.currentAuthUser;
    readonly profile = this.userStore.currentProfile;

    readonly name = computed(() => {
        const p = this.profile();
        if (!p) return 'Пользователь';

        if (p.firstName || p.lastName) {
            return `${p.firstName || ''} ${p.lastName || ''}`.trim();
        }
        return p.username;
    });

    readonly initial = computed(() => {
        const userName = this.name();
        return userName.charAt(0).toUpperCase();
    });

    readonly avatarUrl = computed(() => {
        return this.profile()?.avatarUrl ?? null;
    });

    readonly accountType = computed(() => {
        return 'Undefined';
    });
}

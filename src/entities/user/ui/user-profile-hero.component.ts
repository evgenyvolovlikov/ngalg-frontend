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
    readonly user = this.userStore.currentUser;

    readonly name = computed(() => {
        const currentUser = this.user();
        return currentUser?.email || 'Пользователь';
    });

    readonly initial = computed(() => {
        const userName = this.name();
        return userName.charAt(0).toUpperCase();
    });

    readonly accountType = computed(() => {
        // TODO: Добавить после обновления стора необходимым полем
        return 'Google';
    });
}

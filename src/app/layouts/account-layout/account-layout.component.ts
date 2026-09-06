import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';

import { AccountNavigationComponent } from '@widgets/account-navigation';

import { UserApiService, UserProfileHeroComponent, UserStore } from '@entities/user';

@Component({
    selector: 'app-account-layout',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [RouterOutlet, AccountNavigationComponent, UserProfileHeroComponent],
    templateUrl: './account-layout.component.html',
    styleUrl: './account-layout.component.scss',
})
export class AccountLayoutComponent implements OnInit {
    private readonly userApi = inject(UserApiService);
    private readonly userStore = inject(UserStore);
    private readonly destroyRef = inject(DestroyRef);

    ngOnInit(): void {
        this.userApi
            .getProfile()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe({
                next: (profile) => this.userStore.setProfile(profile),
                error: (err) => console.error('Ошибка при загрузке профиля', err),
            });
    }
}

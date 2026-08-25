import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ReadinessStatsComponent, UserStore } from '@entities/user';
import { DeployPortfolioComponent } from '@features/deploy-portfolio';

import { TerminalContainerComponent } from '@shared/ui/terminal-container';

@Component({
    selector: 'app-readiness-radar',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './readiness-radar.component.html',
    styleUrl: './readiness-radar.component.scss',
    imports: [TerminalContainerComponent, ReadinessStatsComponent, DeployPortfolioComponent],
})
export class ReadinessRadarComponent {
    private readonly userStore = inject(UserStore);

    /** Сигнал с данными профиля текущего пользователя */
    protected readonly profile = this.userStore.profile;
}

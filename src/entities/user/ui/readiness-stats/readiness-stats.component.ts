import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ProgressBarComponent } from '@shared/ui/progress-bar';

import { UserProfile } from '../../model/user.model';

@Component({
    selector: 'app-readiness-stats',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './readiness-stats.component.html',
    styleUrl: './readiness-stats.component.scss',
    imports: [ProgressBarComponent],
})
export class ReadinessStatsComponent {
    /** Профиль пользователя со статистикой готовности */
    readonly profile = input.required<UserProfile>();
}

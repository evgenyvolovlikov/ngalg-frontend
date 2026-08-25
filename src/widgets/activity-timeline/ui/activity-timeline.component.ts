import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ContributionGraphComponent, ContributionStore } from '@entities/contribution';

import { TerminalContainerComponent } from '@shared/ui/terminal-container';

@Component({
    selector: 'app-activity-timeline',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './activity-timeline.component.html',
    styleUrl: './activity-timeline.component.scss',
    imports: [TerminalContainerComponent, ContributionGraphComponent],
})
export class ActivityTimelineComponent {
    private readonly contributionStore = inject(ContributionStore);

    /** Сигнал со статистикой коммитов и активности */
    protected readonly stats = this.contributionStore.stats;
}

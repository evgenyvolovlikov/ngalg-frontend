import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ContributionStats } from '../model/contribution.model';

@Component({
    selector: 'app-contribution-graph',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './contribution-graph.component.html',
    styleUrl: './contribution-graph.component.scss',
})
export class ContributionGraphComponent {
    /** Статистика активности пользователя */
    readonly stats = input.required<ContributionStats>();

    protected getLevelClass(count: number): string {
        if (count === 0) return 'contribution-graph__cell--level-0';
        if (count <= 1) return 'contribution-graph__cell--level-1';
        if (count <= 3) return 'contribution-graph__cell--level-2';
        return 'contribution-graph__cell--level-3';
    }
}

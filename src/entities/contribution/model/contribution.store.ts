import { Injectable, signal } from '@angular/core';

import { ContributionStats } from './contribution.model';

@Injectable({
    providedIn: 'root',
})
export class ContributionStore {
    private readonly statsSignal = signal<ContributionStats>({
        totalCommits: 42,
        streakDays: 5,
        days: [
            { date: '2026-08-01', count: 2 },
            { date: '2026-08-02', count: 0 },
            { date: '2026-08-03', count: 1 },
            { date: '2026-08-04', count: 4 },
            { date: '2026-08-05', count: 0 },
            { date: '2026-08-06', count: 3 },
            { date: '2026-08-07', count: 2 },
            { date: '2026-08-08', count: 0 },
            { date: '2026-08-09', count: 5 },
            { date: '2026-08-10', count: 1 },
            { date: '2026-08-11', count: 0 },
            { date: '2026-08-12', count: 2 },
            { date: '2026-08-13', count: 3 },
            { date: '2026-08-14', count: 1 },
        ],
    });

    /** Публичныйreadonly сигнал статистики */
    readonly stats = this.statsSignal.asReadonly();
}

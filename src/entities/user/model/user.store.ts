import { Injectable, signal } from '@angular/core';

import { UserProfile } from './user.model';

@Injectable({
    providedIn: 'root',
})
export class UserStore {
    private readonly profileSignal = signal<UserProfile>({
        id: 'u-1',
        username: 'a-ivanov',
        readinessScore: 33,
        statusLabel: 'CRITICAL VULNERABILITY',
        statusMessage: 'Portfolio Resume is exposed. Fix algorithms to deploy modules.',

        fullName: 'АЛЕКСАНДР ИВАНОВ',
        experienceYears: 3,
        stack: ['Angular', 'Signals', 'RxJS', 'TypeScript'],
        githubUrl: 'github.com/testtestik',

        independenceIndex: 85,
        complexityLevel: 'L3 (Senior)',
        solvedTracks: 8,
        totalTracks: 12,
        aiInsight:
            '«На Секции 2 ты был близок к O(N^2). Оптимизация за один проход — твой главный актив. Рекомендую закрепить тему Графов».',

        subscription: {
            plan: 'PREMIUM',
            validUntil: '01.07.2026',
        },
    });

    /** Публичный инкапсулированный сигнал профиля */
    readonly profile = this.profileSignal.asReadonly();
}

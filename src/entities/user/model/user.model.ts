export type SubscriptionPlan = 'FREE' | 'PREMIUM';

export interface UserSubscription {
    plan: SubscriptionPlan;
    validUntil?: string;
}

export interface UserProfile {
    id: string;
    username: string;
    readinessScore: number;
    statusLabel: string;
    statusMessage: string;

    fullName: string;
    experienceYears: number;
    stack: string[];
    githubUrl: string;

    independenceIndex: number;
    complexityLevel: string;
    solvedTracks: number;
    totalTracks: number;
    aiInsight: string;

    subscription: UserSubscription;
}

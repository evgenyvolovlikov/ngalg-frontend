export interface ContributionDay {
    date: string;
    count: number;
}

export interface ContributionStats {
    totalCommits: number;
    streakDays: number;
    days: ContributionDay[];
}

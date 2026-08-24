export interface Lesson {
    id: string;
    slug: string;
    title: string;
    durationMin: number;
    isFree: boolean;
    isLocked: boolean;
    isWatched: boolean;
    description?: string;
    videoUrl: string;
}

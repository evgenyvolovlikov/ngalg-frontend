export type AiTemperament = 'STRICT' | 'MENTOR' | 'CASUAL';

export interface TestCase {
    name: string;
    input: unknown[];
    expectedOutput: unknown;
    isHidden: boolean;
}

export interface TestResult extends TestCase {
    passed?: boolean;
    actualOutput?: unknown;
    error?: string;
}

export interface TrackEntity {
    id: string;
    slug: string;
    title: string;
    description: string | null;
    isPublished: boolean;
    orderIndex: number;
    createdAt: string;
    updatedAt: string;
}

export interface TrackStepEntity {
    id: string;
    trackId: string;
    sequenceOrder: number;
    title: string;
    specText: string;
    timeComplexity: string;
    spaceComplexity: string;
    starterCode: string;
    tests: TestCase[];
    aiTemperament: AiTemperament;
    createdAt: string;
    updatedAt: string;
}

export interface TrackDetailEntity extends Omit<TrackEntity, 'createdAt' | 'updatedAt'> {
    steps: Omit<TrackStepEntity, 'createdAt' | 'updatedAt'>[];
}

export interface TrackStepNavItem {
    id: string;
    sequenceOrder: number;
    title: string;
    isCompleted: boolean;
}

export interface UserStepSolutionEntity {
    userId: string;
    stepId: string;
    savedCode: string;
    isCompleted: boolean;
    aiFeedback: Record<string, unknown> | null;
    createdAt: string;
    updatedAt: string;
}

export type CreateTrackDto = Omit<TrackEntity, 'id' | 'slug' | 'createdAt' | 'updatedAt'>;
export type UpdateTrackDto = Partial<CreateTrackDto>;

export type CreateTrackStepDto = Omit<TrackStepEntity, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateTrackStepDto = Partial<CreateTrackStepDto>;

export interface CommitSolutionDto {
    stepId: string;
    code: string;
}

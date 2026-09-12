import { computed, inject } from '@angular/core';

import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';

import { TrackApiService } from '../api/track-api.service';
import {
    CommitSolutionDto,
    TestResult,
    TrackDetailEntity,
    TrackEntity,
    TrackStepNavItem,
} from '../model/track.types';

export interface TrackState {
    tracks: TrackEntity[];
    currentTrack: TrackDetailEntity | null;
    selectedStepId: string | null;
    testResults: TestResult[];
    isRunningTests: boolean;
    isLoading: boolean;
    error: string | null;
}

const initialState: TrackState = {
    tracks: [],
    currentTrack: null,
    selectedStepId: null,
    testResults: [],
    isRunningTests: false,
    isLoading: false,
    error: null,
};

export const TrackStore = signalStore(
    { providedIn: 'root' },
    withState(initialState),
    withComputed((store) => ({
        steps: computed<TrackStepNavItem[]>(() => {
            const track = store.currentTrack();
            if (!track) return [];
            return track.steps.map((s) => ({
                id: s.id,
                sequenceOrder: s.sequenceOrder,
                title: s.title,
                isCompleted: false,
            }));
        }),
        step: computed(() => {
            const track = store.currentTrack();
            if (!track || track.steps.length === 0) return null;
            const selectedId = store.selectedStepId();
            return track.steps.find((s) => s.id === selectedId) ?? track.steps[0] ?? null;
        }),
    })),
    withMethods((store, trackApi = inject(TrackApiService)) => ({
        selectStep(stepId: string) {
            patchState(store, { selectedStepId: stepId, testResults: [] });
        },

        loadTrackDetail: rxMethod<string>(
            pipe(
                tap(() =>
                    patchState(store, {
                        isLoading: true,
                        error: null,
                        currentTrack: null,
                        selectedStepId: null,
                    }),
                ),
                switchMap((slug) =>
                    trackApi.getTrackDetail(slug).pipe(
                        tapResponse({
                            next: (currentTrack) => {
                                const firstStepId = currentTrack.steps[0]?.id ?? null;
                                patchState(store, {
                                    currentTrack,
                                    selectedStepId: firstStepId,
                                    isLoading: false,
                                });
                            },
                            error: (error: Error) =>
                                patchState(store, { error: error.message, isLoading: false }),
                        }),
                    ),
                ),
            ),
        ),

        async executeTests() {
            patchState(store, { isRunningTests: true });
            // TODO: Убрать искусственную задержку при подключении реального API
            await new Promise((resolve) => setTimeout(resolve, 1500));

            patchState(store, { isRunningTests: false });
        },

        commitSolution: rxMethod<CommitSolutionDto>(
            pipe(
                tap(() => patchState(store, { isLoading: true, error: null })),
                switchMap((dto) =>
                    trackApi.commitSolution(dto).pipe(
                        tapResponse({
                            next: () => patchState(store, { isLoading: false }),
                            error: (error: Error) =>
                                patchState(store, { error: error.message, isLoading: false }),
                        }),
                    ),
                ),
            ),
        ),

        clearCurrentTrack: () => patchState(store, initialState),
    })),
);

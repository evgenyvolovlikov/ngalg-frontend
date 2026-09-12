import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api';
import { RouteSegments } from '@shared/config';

import {
    CommitSolutionDto,
    CreateTrackDto,
    CreateTrackStepDto,
    TrackDetailEntity,
    TrackEntity,
    TrackStepEntity,
    UpdateTrackDto,
    UpdateTrackStepDto,
    UserStepSolutionEntity,
} from '../model/track.types';

@Injectable({
    providedIn: 'root',
})
export class TrackApiService extends BaseApiService {
    private readonly basePath = `/${RouteSegments.TRACKS}`;

    getTracks(): Observable<TrackEntity[]> {
        return this.http.get<TrackEntity[]>(this.basePath, { withCredentials: true });
    }

    getTrackDetail(slug: string): Observable<TrackDetailEntity> {
        return this.http.get<TrackDetailEntity>(`${this.basePath}/${slug}`, {
            withCredentials: true,
        });
    }

    createTrack(dto: CreateTrackDto): Observable<TrackEntity> {
        return this.http.post<TrackEntity>(this.basePath, dto, { withCredentials: true });
    }

    updateTrack(id: string, dto: UpdateTrackDto): Observable<TrackEntity> {
        return this.http.patch<TrackEntity>(`${this.basePath}/${id}`, dto, {
            withCredentials: true,
        });
    }

    deleteTrack(id: string): Observable<void> {
        return this.http.delete<void>(`${this.basePath}/${id}`, { withCredentials: true });
    }

    createStep(trackId: string, dto: CreateTrackStepDto): Observable<TrackStepEntity> {
        return this.http.post<TrackStepEntity>(`${this.basePath}/${trackId}/steps`, dto, {
            withCredentials: true,
        });
    }

    updateStep(stepId: string, dto: UpdateTrackStepDto): Observable<TrackStepEntity> {
        return this.http.patch<TrackStepEntity>(`${this.basePath}/steps/${stepId}`, dto, {
            withCredentials: true,
        });
    }

    deleteStep(stepId: string): Observable<void> {
        return this.http.delete<void>(`${this.basePath}/steps/${stepId}`, {
            withCredentials: true,
        });
    }

    commitSolution(dto: CommitSolutionDto): Observable<UserStepSolutionEntity> {
        return this.http.post<UserStepSolutionEntity>(`${this.basePath}/solutions/commit`, dto, {
            withCredentials: true,
        });
    }
}

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api';
import { RouteSegments } from '@shared/config';
import { LessonDetail } from '@shared/types';

@Injectable({ providedIn: 'root' })
export class LessonApiService extends BaseApiService {
    getLessonDetail(id: string): Observable<LessonDetail> {
        return this.http.get<LessonDetail>(
            `/${RouteSegments.COURSES}/${RouteSegments.LESSONS}/${id}`,
            {
                withCredentials: true,
            },
        );
    }
}

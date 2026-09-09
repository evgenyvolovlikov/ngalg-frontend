import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api';
import { RouteSegments } from '@shared/config';
import { CourseSkeleton } from '@shared/types';

@Injectable({ providedIn: 'root' })
export class CourseApiService extends BaseApiService {
    getCourseSkeleton(slug: string): Observable<CourseSkeleton> {
        return this.http.get<CourseSkeleton>(`/${RouteSegments.COURSES}/${slug}`, {
            withCredentials: true,
        });
    }
}

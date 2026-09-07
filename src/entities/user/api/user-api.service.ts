import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api';
import { RouteSegments } from '@shared/config';

import type { Profile, User } from '../model/user.types';

@Injectable({ providedIn: 'root' })
export class UserApiService extends BaseApiService {
    /**
     * Запрос на получение текущего авторизованного пользователя
     */
    public getAuthUser(): Observable<User> {
        return this.http.get<User>(`/${RouteSegments.AUTH}/${RouteSegments.ME}`, {
            withCredentials: true,
        });
    }

    /**
     * Запрос на получение профиля текущего пользователя
     */
    public getProfile(): Observable<Profile> {
        return this.http.get<Profile>(`/${RouteSegments.PROFILES}/${RouteSegments.ME}`, {
            withCredentials: true,
        });
    }

    /**
     * Обновление поля username текущего профиля
     */
    public updateUsername(username: string): Observable<Profile> {
        return this.http.patch<Profile>(
            `/${RouteSegments.PROFILES}/${RouteSegments.ME}`,
            { username },
            { withCredentials: true },
        );
    }
}

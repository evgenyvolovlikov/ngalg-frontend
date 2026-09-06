import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api';

import type { Profile, User } from '../model/user.types';

@Injectable({ providedIn: 'root' })
export class UserApiService extends BaseApiService {
    /**
     * Запрос на получение текущего авторизованного пользователя
     */
    public getAuthUser(): Observable<User> {
        return this.http.get<User>('/auth/me', { withCredentials: true });
    }

    /**
     * Запрос на получение профиля текущего пользователя
     */
    public getProfile(): Observable<Profile> {
        return this.http.get<Profile>('/profiles/me', { withCredentials: true });
    }
}

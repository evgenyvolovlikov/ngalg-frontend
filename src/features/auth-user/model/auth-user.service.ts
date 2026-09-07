import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { RouteBuilder } from '@shared/config';

import { AuthUserResponse, LoginDto, RegisterDto } from './auth-user.types';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly http = inject(HttpClient);

    login(dto: LoginDto): Observable<AuthUserResponse> {
        return this.http.post<AuthUserResponse>(RouteBuilder.AUTH_LOGIN(), dto, {
            withCredentials: true,
        });
    }

    register(dto: RegisterDto): Observable<AuthUserResponse> {
        return this.http.post<AuthUserResponse>(RouteBuilder.AUTH_REGISTER(), dto, {
            withCredentials: true,
        });
    }

    logout(): Observable<void> {
        return this.http.post<void>(
            RouteBuilder.AUTH_LOGOUT(),
            {},
            {
                withCredentials: true,
            },
        );
    }
}

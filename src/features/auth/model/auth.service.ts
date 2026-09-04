import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { RouteBuilder } from '@shared/config';

import { AuthResponse, LoginDto, RegisterDto } from './auth.types';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private readonly http = inject(HttpClient);

    login(dto: LoginDto): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(RouteBuilder.AUTH_LOGIN(), dto, {
            withCredentials: true,
        });
    }

    register(dto: RegisterDto): Observable<AuthResponse> {
        return this.http.post<AuthResponse>(RouteBuilder.AUTH_REGISTER(), dto, {
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

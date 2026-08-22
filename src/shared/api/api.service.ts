import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { Observable } from 'rxjs';

import { API_CONFIG } from './api-config.token';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private readonly http = inject(HttpClient);
    private readonly config = inject(API_CONFIG);

    get<T>(path: string, params?: Record<string, unknown>): Observable<T> {
        return this.http.get<T>(this.buildUrl(path), {
            params: this.buildParams(params),
        });
    }

    post<T, B = unknown>(path: string, body: B): Observable<T> {
        return this.http.post<T>(this.buildUrl(path), body);
    }

    put<T, D = unknown>(path: string, body: D): Observable<T> {
        return this.http.put<T>(this.buildUrl(path), body);
    }

    patch<T, D = unknown>(path: string, body: D): Observable<T> {
        return this.http.patch<T>(this.buildUrl(path), body);
    }

    delete<T>(path: string): Observable<T> {
        return this.http.delete<T>(this.buildUrl(path));
    }

    private buildUrl(path: string): string {
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `${this.config.baseUrl}${cleanPath}`;
    }

    private buildParams(params?: Record<string, unknown>): HttpParams {
        let httpParams = new HttpParams();

        if (!params) {
            return httpParams;
        }

        Object.entries(params).forEach(([key, value]) => {
            if (value !== null && value !== undefined && value !== '') {
                httpParams = httpParams.set(key, String(value));
            }
        });

        return httpParams;
    }
}

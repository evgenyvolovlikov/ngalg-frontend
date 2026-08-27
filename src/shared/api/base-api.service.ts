import { HttpClient, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';

export abstract class BaseApiService {
    protected readonly http = inject(HttpClient);

    protected get<T>(endpoint: string, params?: Record<string, unknown>): Observable<T> {
        return this.http
            .get<T>(endpoint, { params: this.buildParams(params) })
            .pipe(catchError(this.handleError));
    }

    protected post<T>(endpoint: string, body: unknown): Observable<T> {
        return this.http.post<T>(endpoint, body).pipe(catchError(this.handleError));
    }

    protected put<T>(endpoint: string, body: unknown): Observable<T> {
        return this.http.put<T>(endpoint, body).pipe(catchError(this.handleError));
    }

    protected delete<T>(endpoint: string): Observable<T> {
        return this.http.delete<T>(endpoint).pipe(catchError(this.handleError));
    }

    private buildParams(params?: Record<string, unknown>): HttpParams {
        let httpParams = new HttpParams();
        if (!params) return httpParams;

        Object.entries(params).forEach(([key, value]) => {
            if (value === null || value === undefined) return;

            if (Array.isArray(value)) {
                value.forEach((item) => {
                    httpParams = httpParams.append(key, String(item));
                });
            } else {
                httpParams = httpParams.set(key, String(value));
            }
        });

        return httpParams;
    }

    protected handleError(error: unknown): Observable<never> {
        return throwError(() => error);
    }
}

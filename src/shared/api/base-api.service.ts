import { HttpClient, HttpParams } from '@angular/common/http';
import { inject } from '@angular/core';

import { Observable, catchError, throwError } from 'rxjs';

export abstract class BaseApiService {
    protected readonly http = inject(HttpClient);

    protected get<T>(endpoint: string, params?: Record<string, unknown>): Observable<T> {
        return this.http
            .get<T>(endpoint, { params: this.buildParams(params) })
            .pipe(catchError((err) => this.handleError(err)));
    }

    protected post<T>(endpoint: string, body: unknown): Observable<T> {
        return this.http.post<T>(endpoint, body).pipe(catchError((err) => this.handleError(err)));
    }

    protected patch<T>(endpoint: string, body: unknown): Observable<T> {
        return this.http.patch<T>(endpoint, body).pipe(catchError((err) => this.handleError(err)));
    }

    protected delete<T>(endpoint: string): Observable<T> {
        return this.http.delete<T>(endpoint).pipe(catchError((err) => this.handleError(err)));
    }

    private buildParams(params?: Record<string, unknown>): HttpParams {
        let httpParams = new HttpParams();
        if (!params) return httpParams;

        Object.entries(params).forEach(([key, value]) => {
            if (value === null || value === undefined) return;

            if (Array.isArray(value)) {
                value.forEach((item) => {
                    const itemValue =
                        typeof item === 'object' && item !== null
                            ? JSON.stringify(item)
                            : String(item);
                    httpParams = httpParams.append(key, itemValue);
                });
            } else if (typeof value === 'object') {
                httpParams = httpParams.set(key, JSON.stringify(value));
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

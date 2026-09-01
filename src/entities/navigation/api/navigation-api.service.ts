import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { BehaviorSubject, Observable, shareReplay, switchMap, tap } from 'rxjs';

import { NavigationSection } from '@shared/types';

import { CreateCategoryDto, CreateSectionDto } from '../model/navigation.types';

@Injectable({ providedIn: 'root' })
export class NavigationApiService {
    private readonly http = inject(HttpClient);
    private readonly baseArticleUrl = 'articles';
    private readonly baseArticleNavigation = 'navigation';

    private readonly refreshTrigger$ = new BehaviorSubject<void>(undefined);

    public readonly navigationTree$: Observable<NavigationSection[]> = this.refreshTrigger$.pipe(
        switchMap(() =>
            this.http.get<NavigationSection[]>(
                `/${this.baseArticleUrl}/${this.baseArticleNavigation}`,
            ),
        ),
        shareReplay(1),
    );

    public getNavigationTree(): Observable<NavigationSection[]> {
        return this.http.get<NavigationSection[]>(
            `/${this.baseArticleUrl}/${this.baseArticleNavigation}`,
        );
    }

    public createSection(dto: CreateSectionDto): Observable<NavigationSection> {
        return this.http
            .post<NavigationSection>(`/${this.baseArticleNavigation}/sections`, dto)
            .pipe(tap(() => this.refreshTrigger$.next()));
    }

    public createCategory(dto: CreateCategoryDto): Observable<unknown> {
        return this.http
            .post<unknown>(`/${this.baseArticleNavigation}/categories`, dto)
            .pipe(tap(() => this.refreshTrigger$.next()));
    }
}

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { BaseApiService } from '@shared/api';
import { AppRoutes } from '@shared/config';

import type {
    Article,
    CreateArticleDto,
    GetArticlesQueryDto,
    UpdateArticleDto,
} from '../model/article.types';

@Injectable({
    providedIn: 'root',
})
export class ArticleApiService extends BaseApiService {
    private readonly basePath = AppRoutes.ARTICLES;

    /**
     * Создание новой статьи
     */
    public createArticle(dto: CreateArticleDto): Observable<Article> {
        return this.post<Article>(this.basePath, dto);
    }

    /**
     * Получение списка статей с фильтрацией
     */
    public getArticles(query?: GetArticlesQueryDto): Observable<Article[]> {
        return this.get<Article[]>(this.basePath, query as Record<string, unknown>);
    }

    /**
     * Получение конкретной статьи.
     * Бекенд парсит UUID из строки, можно передавать как 'id', так и 'id-slug'
     */
    public getArticleById(idWithSlug: string): Observable<Article> {
        return this.get<Article>(`${this.basePath}/${idWithSlug}`);
    }

    /**
     * Частичное обновление статьи
     */
    public updateArticle(idWithSlug: string, dto: UpdateArticleDto): Observable<Article> {
        return this.patch<Article>(`${this.basePath}/${idWithSlug}`, dto);
    }

    /**
     * Удаление статьи
     */
    public deleteArticle(idWithSlug: string): Observable<void> {
        return this.delete<void>(`${this.basePath}/${idWithSlug}`);
    }
}

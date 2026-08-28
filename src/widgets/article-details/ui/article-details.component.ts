import { Component, computed, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { catchError, of, switchMap } from 'rxjs';

import { ArticleApiService, ArticleComponent } from '@entities/article';

import { APP_ROUTES_MAP, AppRoutes } from '@shared/config';
import { BreadcrumbItem, BreadcrumbsComponent } from '@shared/ui/breadcrumbs';

@Component({
    selector: 'app-article-details',
    standalone: true,
    imports: [ArticleComponent, BreadcrumbsComponent],
    templateUrl: './article-details.component.html',
    styleUrl: './article-details.component.scss',
})
export class ArticleDetailsComponent {
    articleId = input.required<string>();

    private articleApi = inject(ArticleApiService);

    currentArticle = toSignal(
        toObservable(this.articleId).pipe(
            switchMap((id) =>
                this.articleApi.getArticleById(id).pipe(
                    catchError((error) => {
                        console.error(`Ошибка загрузки статьи с id=${id}:`, error);
                        return of(null);
                    }),
                ),
            ),
        ),
        { initialValue: null },
    );

    readonly breadcrumbs = computed<BreadcrumbItem[]>(() => {
        const currentArticle = this.currentArticle();

        const items: BreadcrumbItem[] = [
            {
                label: 'Главная',
                url: AppRoutes.HOME,
            },
            {
                label: APP_ROUTES_MAP.ARTICLES.label,
                url: AppRoutes.ARTICLES,
            },
        ];

        if (currentArticle) {
            items.push({
                label: currentArticle.title,
                url: AppRoutes.ARTICLE_DETAILS(currentArticle.slug || currentArticle.id),
            });
        }

        return items;
    });
}

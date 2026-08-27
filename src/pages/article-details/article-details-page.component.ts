import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

import { switchMap } from 'rxjs';

import { ArticleApiService, ArticleComponent } from '@entities/article';

import { APP_ROUTES_MAP, AppRoutes } from '@shared/config';
import { BreadcrumbItem, BreadcrumbsComponent } from '@shared/ui/breadcrumbs';

@Component({
    selector: 'app-article-details-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-details-page.component.html',
    imports: [ArticleComponent, BreadcrumbsComponent],
})
export class ArticleDetailsPageComponent {
    readonly id = input.required<string>();

    private readonly articleApi = inject(ArticleApiService);

    readonly currentArticle = toSignal(
        toObservable(this.id).pipe(
            switchMap((articleId) => this.articleApi.getArticleById(articleId)),
        ),
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

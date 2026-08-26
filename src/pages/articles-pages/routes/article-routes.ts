import { Routes } from '@angular/router';

import { ARTICLE_ROUTES_CONFIG } from '../config/article-routes.config';

export const ARTICLE_ROUTES: Routes = [
    {
        path: ARTICLE_ROUTES_CONFIG.MAIN,
        pathMatch: 'full',
        loadComponent: () =>
            import('../ui/articles-page/articles-page.component').then(
                (component) => component.ArticlesPageComponent,
            ),
    },
    {
        path: ARTICLE_ROUTES_CONFIG.CREATE,
        loadComponent: () =>
            import('../ui/article-create-page/article-create-page.component').then(
                (component) => component.ArticleCreatePageComponent,
            ),
    },
    {
        path: ARTICLE_ROUTES_CONFIG.UPDATE,
        loadComponent: () =>
            import('../ui/article-update-page/article-update-page.component').then(
                (component) => component.ArticleUpdatePageComponent,
            ),
    },
    {
        path: ARTICLE_ROUTES_CONFIG.DETAIL,
        loadComponent: () =>
            import('../ui/article-detail-page/article-detail-page.component').then(
                (component) => component.ArticleDetailPageComponent,
            ),
    },
];

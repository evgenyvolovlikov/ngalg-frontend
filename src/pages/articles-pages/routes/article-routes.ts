import { Routes } from '@angular/router';

import { ARTICLE_SUB_ROUTES } from '../config/article-routes.config';

export const ARTICLE_ROUTES: Routes = [
    {
        path: '',

        children: [
            {
                path: ARTICLE_SUB_ROUTES.MAIN,
                loadComponent: () =>
                    import('../ui/articles-page/articles-page.component').then(
                        (component) => component.ArticlesPageComponent,
                    ),
            },
            {
                path: ARTICLE_SUB_ROUTES.CREATE,
                loadComponent: () =>
                    import('../ui/article-create-page/article-create-page.component').then(
                        (component) => component.ArticleCreatePageComponent,
                    ),
            },

            {
                path: ARTICLE_SUB_ROUTES.UPDATE,
                loadComponent: () =>
                    import('../ui/article-update-page/article-update-page.component').then(
                        (component) => component.ArticleUpdatePageComponent,
                    ),
            },

            {
                path: ARTICLE_SUB_ROUTES.DETAIL,
                loadComponent: () =>
                    import('../ui/article-detail-page/article-detail-page.component').then(
                        (component) => component.ArticleDetailPageComponent,
                    ),
            },
        ],
    },
];

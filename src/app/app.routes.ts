import { Route, Routes } from '@angular/router';

import { APP_ROUTES_MAP } from '@shared/config/routes.config';

/* Статьи */
const articlesRoute: Route = {
    path: APP_ROUTES_MAP.ARTICLES.path,
    loadChildren: () => import('@pages/articles-pages').then((routes) => routes.ARTICLE_ROUTES),
};

export const appRoutes: Routes = [
    articlesRoute,
    {
        path: '**',
        redirectTo: '',
    },
];

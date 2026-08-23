import { Route, Routes } from '@angular/router';

import { APP_ROUTES_MAP } from '@shared/config/routes.config';

/*  ПУБЛИЧНЫЕ ПОЛЯ */

/*  Лендинг */
const landingPage: Route = {
    path: APP_ROUTES_MAP.LANDING.path,
    loadComponent: () =>
        import('@pages/landing-page').then((component) => component.LandingPageComponent),
};

/*  ПРИВАТНЫЕ ПОЛЯ */

/* Авторизация */
const authRoute: Route = {
    path: APP_ROUTES_MAP.AUTH.path,
    loadChildren: () => import('@pages/auth-page').then((routes) => routes.AUTH_ROUTES),
};

/* Статьи */
const articlesRoute: Route = {
    path: APP_ROUTES_MAP.ARTICLES.path,
    loadChildren: () => import('@pages/articles-pages').then((routes) => routes.ARTICLE_ROUTES),
};

/*  ФИНАЛЬНЫЙ ЭКСПОРТ */
export const appRoutes: Routes = [landingPage, authRoute, articlesRoute];

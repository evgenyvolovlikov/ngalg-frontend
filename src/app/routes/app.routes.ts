import { Route, Routes } from '@angular/router';

import { APP_ROUTES_MAP } from '@shared/config/routes.config';

/*  ПУБЛИЧНЫЕ ПОЛЯ */

/*  Лендинг */
const landingPage: Route = {
    path: APP_ROUTES_MAP.LANDING.path,
    loadComponent: () =>
        import('@pages/landing-page').then((component) => component.LandingPageComponent),
};

/* Авторизация */
const authRoute: Route = {
    path: APP_ROUTES_MAP.AUTH.path,
    loadChildren: () => import('@pages/auth-page').then((routes) => routes.AUTH_ROUTES),
};

/*  ПРИВАТНЫЕ ПОЛЯ */

/* Дешборд */
const dashboardRoute: Route = {
    path: APP_ROUTES_MAP.DASHBOARD.path,
    loadComponent: () =>
        import('@pages/dashboard-page').then((component) => component.DashboardPageComponent),
};

/* Треки */
const tracksRoute: Route = {
    path: APP_ROUTES_MAP.TRACKS.path,
    loadChildren: () => import('@pages/tracks-page').then((routes) => routes.TRACK_ROUTES),
};

/* Статьи */
const articlesRoute: Route = {
    path: APP_ROUTES_MAP.ARTICLES.path,
    loadChildren: () => import('@pages/articles-pages').then((routes) => routes.ARTICLE_ROUTES),
};

/*  ФИНАЛЬНЫЙ ЭКСПОРТ */
export const appRoutes: Routes = [
    landingPage,
    authRoute,
    dashboardRoute,
    tracksRoute,
    articlesRoute,
];

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

    loadComponent: () => import('@app/layouts/auth-layout').then((m) => m.AuthLayoutComponent),

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

    loadComponent: () =>
        import('@app/layouts/sidebar-layout').then((m) => m.SidebarLayoutComponent),

    loadChildren: () => import('@pages/articles-pages').then((routes) => routes.ARTICLE_ROUTES),
};

/* Курс */
const courseRoute: Route = {
    path: APP_ROUTES_MAP.COURSE.path,
    loadChildren: () => import('@pages/course-pages').then((routes) => routes.COURSE_ROUTES),
};

/* Профиль */
const profileRoute: Route = {
    path: APP_ROUTES_MAP.PROFILE.path,
    loadChildren: () => import('@pages/profile-page').then((routes) => routes.PROFILE_ROUTES),
};

const mainLayoutRoute: Route = {
    path: '',
    loadComponent: () =>
        import('@app/layouts/main-layout').then((component) => component.MainLayoutComponent),
    children: [dashboardRoute, tracksRoute, articlesRoute, courseRoute, profileRoute],
};

/*  ФИНАЛЬНЫЙ ЭКСПОРТ */
export const appRoutes: Routes = [
    landingPage,
    authRoute,
    mainLayoutRoute,
    {
        path: '**',
        redirectTo: APP_ROUTES_MAP.LANDING.path,
    },
];

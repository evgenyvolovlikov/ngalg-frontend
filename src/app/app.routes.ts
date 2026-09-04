import { Routes } from '@angular/router';

import { RouteSegments } from '@shared/config/routes.config';

import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

export const AUTH_ROUTES: Routes = [
    {
        path: RouteSegments.ROOT,
        redirectTo: RouteSegments.LOGIN,
        pathMatch: 'full',
    },
    {
        path: RouteSegments.LOGIN,
        loadComponent: () =>
            import('@pages/login/login-page.component').then((c) => c.LoginPageComponent),
        title: 'Login',
    },
    {
        path: RouteSegments.REGISTER,
        loadComponent: () =>
            import('@pages/register/register-page.component').then((c) => c.RegisterPageComponent),
        title: 'Register',
    },

    {
        path: RouteSegments.RESET_PASSWORD,
        loadComponent: () =>
            import('@pages/reset-password/reset-password.component').then(
                (c) => c.ResetPasswordPageComponent,
            ),
        title: 'Register',
    },
];

export const ARTICLE_ROUTES: Routes = [
    {
        path: RouteSegments.ROOT,
        loadComponent: () =>
            import('@pages/articles-home/articles-home-page.component').then(
                (c) => c.ArticlesHomePageComponent,
            ),
        title: 'Articles',
    },
    {
        path: RouteSegments.LIST,
        loadComponent: () =>
            import('@pages/article-list/article-list-page.component').then(
                (c) => c.ArticleListPageComponent,
            ),
        title: 'Article List',
    },
    {
        path: RouteSegments.CREATE,
        loadComponent: () =>
            import('@pages/article-editor/article-editor-page.component').then(
                (c) => c.ArticleEditorPageComponent,
            ),
        title: 'Create Article',
    },
    {
        path: RouteSegments.DETAILS,
        loadComponent: () =>
            import('@pages/article-details/article-details-page.component').then(
                (c) => c.ArticleDetailsPageComponent,
            ),
        title: 'Article Details',
    },
    {
        path: RouteSegments.EDIT,
        loadComponent: () =>
            import('@pages/article-editor/article-editor-page.component').then(
                (c) => c.ArticleEditorPageComponent,
            ),
        title: 'Edit Article',
    },
];

export const APP_ROUTES: Routes = [
    {
        path: RouteSegments.ROOT,
        redirectTo: RouteSegments.ARTICLES,
        pathMatch: 'full',
    },
    {
        path: RouteSegments.AUTH,
        component: AuthLayoutComponent,
        children: AUTH_ROUTES,
    },
    {
        path: RouteSegments.ARTICLES,
        children: ARTICLE_ROUTES,
    },
    {
        path: RouteSegments.WILDCARD,
        redirectTo: RouteSegments.ARTICLES,
    },
];

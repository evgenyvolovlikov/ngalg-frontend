import { Routes } from '@angular/router';

import { RouteSegments } from '@shared/config/routes.config';

import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const AUTH_ROUTES: Routes = [
    {
        path: RouteSegments.ROOT,
        redirectTo: RouteSegments.LOGIN,
        pathMatch: 'full',
    },
    {
        path: RouteSegments.LOGIN,
        loadComponent: () =>
            import('@pages/login-page/login-page.component').then((c) => c.LoginPageComponent),
        title: 'Login',
    },
    {
        path: RouteSegments.REGISTER,
        loadComponent: () =>
            import('@pages/register-page/register-page.component').then(
                (c) => c.RegisterPageComponent,
            ),
        title: 'Register',
    },

    {
        path: RouteSegments.RESET_PASSWORD,
        loadComponent: () =>
            import('@pages/reset-password-page/reset-password.component').then(
                (c) => c.ResetPasswordPageComponent,
            ),
        title: 'Reset password',
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
            import('@pages/article-details-page/article-details-page.component').then(
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

export const ACCOUNT_ROUTES: Routes = [
    {
        path: RouteSegments.ROOT,
        redirectTo: RouteSegments.OVERVIEW,
        pathMatch: 'full',
    },
    {
        path: RouteSegments.OVERVIEW,
        loadComponent: () =>
            import('@pages/account-overview-page/account-overview-page.component').then(
                (c) => c.AccountOverviewPageComponent,
            ),
        title: 'Account Overview',
    },
    {
        path: RouteSegments.TRANSACTIONS,
        loadComponent: () =>
            import('@pages/account-transactions-page/account-transactions-page.component').then(
                (c) => c.AccountTransactionsPageComponent,
            ),
        title: 'Account Transactions',
    },
];

export const COURSE_ROUTES: Routes = [
    {
        path: RouteSegments.ROOT,
        redirectTo: 'angular-advanced',
        pathMatch: 'full',
    },
    {
        path: RouteSegments.COURSE_CREATE,
        loadComponent: () =>
            import('@pages/course-editor/course-editor-page.component').then(
                (c) => c.CourseEditorPageComponent,
            ),
        title: 'Course Create Page',
    },
    {
        path: RouteSegments.COURSE_EDIT,
        loadComponent: () =>
            import('@pages/course-editor/course-editor-page.component').then(
                (c) => c.CourseEditorPageComponent,
            ),
        title: 'Course Edit Page',
    },
    {
        path: RouteSegments.COURSE_DETAILS,
        loadComponent: () =>
            import('@pages/course-details-page/course-details-page.component').then(
                (c) => c.CourseDetailsPageComponent,
            ),
        title: 'Course Details Page',
    },
];

export const TRACK_ROUTES: Routes = [
    {
        path: RouteSegments.TRACKS_CREATE,
        loadComponent: () =>
            import('@pages/track-editor-page/track-editor-page.component').then(
                (c) => c.TrackEditorPageComponent,
            ),
        title: 'Создать трек',
    },
    {
        path: RouteSegments.TRACK_EDIT,
        loadComponent: () =>
            import('@pages/track-editor-page/track-editor-page.component').then(
                (c) => c.TrackEditorPageComponent,
            ),
        title: 'Редактировать трек',
    },
    {
        path: RouteSegments.TRACK_DETAILS,
        loadComponent: () =>
            import('@pages/track-details-page/track-details-page.component').then(
                (c) => c.TrackDetailsPageComponent,
            ),
        title: 'Детали трека',
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
        component: MainLayoutComponent,
        children: ARTICLE_ROUTES,
    },

    {
        path: RouteSegments.TRACKS,
        children: TRACK_ROUTES,
    },

    {
        path: RouteSegments.COURSES,
        component: MainLayoutComponent,
        children: COURSE_ROUTES,
    },
    {
        path: RouteSegments.ACCOUNT,
        component: AccountLayoutComponent,
        children: ACCOUNT_ROUTES,
    },
    {
        path: RouteSegments.WILDCARD,
        redirectTo: RouteSegments.ARTICLES,
    },
];

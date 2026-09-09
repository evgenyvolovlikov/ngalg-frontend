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
        path: RouteSegments.COURSE_DETAILS,
        loadComponent: () =>
            import('@pages/course-details-page/course-details-page.component').then(
                (c) => c.CourseDetailsPageComponent,
            ),
        title: 'Course Details Page',
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

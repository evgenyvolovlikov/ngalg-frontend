import { Routes } from '@angular/router';

export const ARTICLE_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () =>
            import('@pages/articles-home/articles-home-page.component').then(
                (c) => c.ArticlesHomePageComponent,
            ),
        title: 'Articles',
    },
    {
        path: 'list',
        loadComponent: () =>
            import('@pages/article-list/article-list-page.component').then(
                (c) => c.ArticleListPageComponent,
            ),
        title: 'Article List',
    },
    {
        path: 'create',
        loadComponent: () =>
            import('@pages/article-editor/article-editor-page.component').then(
                (c) => c.ArticleEditorPageComponent,
            ),
        title: 'Create Article',
    },
    {
        path: ':id',
        loadComponent: () =>
            import('@pages/article-details-page/article-details-page.component').then(
                (c) => c.ArticleDetailsPageComponent,
            ),
        title: 'Article Details',
    },
    {
        path: ':id/edit',
        loadComponent: () =>
            import('@pages/article-editor/article-editor-page.component').then(
                (c) => c.ArticleEditorPageComponent,
            ),
        title: 'Edit Article',
    },
];

export const APP_ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'articles',
        pathMatch: 'full',
    },
    {
        path: 'articles',
        children: ARTICLE_ROUTES,
    },
    {
        path: '**',
        redirectTo: 'articles',
    },
];

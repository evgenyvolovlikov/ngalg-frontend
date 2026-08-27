import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'articles',
        pathMatch: 'full',
    },
    {
        path: 'articles',
        loadComponent: () => import('@pages/article-list').then((c) => c.ArticleListPageComponent),
    },
    {
        path: 'articles/create',
        loadComponent: () =>
            import('@pages/article-editor').then((c) => c.ArticleEditorPageComponent),
    },
    {
        path: 'articles/:id',
        loadComponent: () =>
            import('@pages/article-details').then((c) => c.ArticleDetailsPageComponent),
    },
    {
        path: 'articles/:id/edit',
        loadComponent: () =>
            import('@pages/article-editor').then((c) => c.ArticleEditorPageComponent),
    },
];

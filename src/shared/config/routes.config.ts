export type RouteMap = 'ARTICLES';

export interface AppRoute {
    id?: number;
    path: string;
    label: string;
}

export type AppRoutesMap = Record<RouteMap, AppRoute>;

export const APP_ROUTES_MAP: AppRoutesMap = {
    ARTICLES: { path: 'articles', label: 'Статьи' },
};

export const AppRoutes = {
    HOME: '/',
    ARTICLES: '/articles',
    ARTICLE_DETAILS: (id: string) => `/articles/${id}`,
    ARTICLE_CREATE: '/articles/create',
    ARTICLE_EDIT: (id: string) => `/articles/${id}/edit`,
} as const;

export const getSafePath = (routePath: string): string =>
    routePath.startsWith('/') ? routePath : `/${routePath}`;

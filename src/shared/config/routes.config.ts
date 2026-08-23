export type RouteMap =
    'LANDING' | 'AUTH' | 'DASHBOARD' | 'TRACKS' | 'ARTICLES' | 'COURSE' | 'PROFILE';

export interface AppRoute {
    id?: number;
    path: string;
    label: string;
}

export type AppRoutes = Record<RouteMap, AppRoute>;

export const APP_ROUTES_MAP: AppRoutes = {
    LANDING: { path: '', label: 'Главная страница' },
    AUTH: { path: 'auth', label: 'Авторизация' },
    DASHBOARD: { path: 'dashboard', label: 'Дешборд' },
    TRACKS: { path: 'tracks', label: 'Треки' },
    ARTICLES: { path: 'articles', label: 'Статьи' },
    COURSE: { path: 'course', label: 'Курс' },
    PROFILE: { path: 'profile', label: 'Профиль' },
};

export const getSafePath = (routePath: string) => (routePath === '' ? '/' : `/${routePath}`);

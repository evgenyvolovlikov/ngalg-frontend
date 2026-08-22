export type RouteMap =
    'LANDING' | 'AUTH' | 'DASHBOARD' | 'TRACKS' | 'COURSE' | 'ARTICLES' | 'PROFILE';

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
    COURSE: { path: 'course', label: 'Курс' },
    ARTICLES: { path: 'articles', label: 'Статьи' },
    PROFILE: { path: 'profile', label: 'Профиль' },
};

export const getSafePath = (routePath: string) => (routePath === '' ? '/' : `/${routePath}`);

export const RouteSegments = {
    ROOT: '',

    AUTH: 'auth',
    LOGIN: 'login',
    REGISTER: 'register',
    RESET_PASSWORD: 'reset-password',
    LOGOUT: 'logout',

    ARTICLES: 'articles',
    LIST: 'list',
    CREATE: 'create',
    DETAILS: ':id',
    EDIT: ':id/edit',

    WILDCARD: '**',
} as const;

export const RouteBuilder = {
    HOME: () => '/',

    AUTH_LOGIN: () => `/${RouteSegments.AUTH}/${RouteSegments.LOGIN}`,
    AUTH_REGISTER: () => `/${RouteSegments.AUTH}/${RouteSegments.REGISTER}`,
    AUTH_RESET: () => `/${RouteSegments.AUTH}/${RouteSegments.RESET_PASSWORD}`,
    AUTH_LOGOUT: () => `${RouteSegments.AUTH}/${RouteSegments.LOGOUT}`,

    ARTICLES: () => `/${RouteSegments.ARTICLES}`,
    ARTICLE_CREATE: () => `/${RouteSegments.ARTICLES}/${RouteSegments.CREATE}`,
    ARTICLE_DETAILS: (id: string) => `/${RouteSegments.ARTICLES}/${id}`,
    ARTICLE_EDIT: (id: string) => `/${RouteSegments.ARTICLES}/${id}/edit`,
} as const;

export interface NavItem {
    path: string;
    label: string;
}

export const MAIN_NAV_ITEMS: readonly NavItem[] = [
    { path: RouteBuilder.ARTICLES(), label: 'Статьи' },
] as const;

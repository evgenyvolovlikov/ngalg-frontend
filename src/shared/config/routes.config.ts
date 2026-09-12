import { IconName } from '../ui/icon';

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

    ACCOUNT: 'account',
    OVERVIEW: 'overview',
    TRANSACTIONS: 'transactions',

    COURSES: 'courses',
    COURSE_DETAILS: ':slug',
    LESSONS: 'lessons',
    COURSE_CREATE: 'create',
    COURSE_EDIT: ':slug/edit',

    TRACKS: 'tracks',
    TRACKS_CREATE: 'create',
    TRACK_DETAILS: ':slug',
    TRACK_EDIT: ':slug/edit',
    TRACK_STEP: ':slug/steps/:stepId',

    PROFILES: 'profiles',
    ME: 'me',

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

    ACCOUNT_OVERVIEW: () => `/${RouteSegments.ACCOUNT}/${RouteSegments.OVERVIEW}`,
    ACCOUNT_TRANSACTIONS: () => `/${RouteSegments.ACCOUNT}/${RouteSegments.TRANSACTIONS}`,

    COURSE_DETAILS: (slug: string) => `/${RouteSegments.COURSES}/${slug}`,

    TRACKS: () => `/${RouteSegments.TRACKS}`,
    TRACK_CREATE: () => `/${RouteSegments.TRACKS}/${RouteSegments.CREATE}`,
    TRACK_DETAILS: (slug: string) => `/${RouteSegments.TRACKS}/${slug}`,
    TRACK_EDIT: (slug: string) => `/${RouteSegments.TRACKS}/${slug}/edit`,
    TRACK_STEP: (slug: string, stepId: string) =>
        `/${RouteSegments.TRACKS}/${slug}/steps/${stepId}`,
} as const;

export interface NavItem {
    path: string;
    label: string;
    icon?: IconName;
}

export const MAIN_NAV_ITEMS: readonly NavItem[] = [
    { path: RouteBuilder.ARTICLES(), label: 'Статьи' },
    { path: RouteBuilder.COURSE_DETAILS('angular-advanced'), label: 'Курс' },
    { path: RouteBuilder.TRACKS(), label: 'Тренажер' },
] as const;

export const ACCOUNT_SIDEBAR_ITEMS: readonly NavItem[] = [
    { path: RouteBuilder.ACCOUNT_OVERVIEW(), label: 'Профиль', icon: 'person' },
    { path: RouteBuilder.ACCOUNT_TRANSACTIONS(), label: 'Подписки', icon: 'credit-card' },
];

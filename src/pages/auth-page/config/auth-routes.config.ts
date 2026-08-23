import { APP_ROUTES_MAP, getSafePath } from '@shared/config';

export const AUTH_SUB_ROUTES = {
    LOGIN: 'login',
    REGISTER: 'register',
    RESET_PASSWORD: 'reset-password',
} as const;

const BASE_PATH = getSafePath(APP_ROUTES_MAP.ARTICLES.path);

export const authNavigation = {
    base: BASE_PATH,
    login: () => [BASE_PATH, AUTH_SUB_ROUTES.LOGIN],
    register: () => [BASE_PATH, AUTH_SUB_ROUTES.REGISTER],
    resetPassword: () => [BASE_PATH, AUTH_SUB_ROUTES.RESET_PASSWORD],
};

import { APP_ROUTES_MAP, getSafePath } from '@shared/config';

export const PROFILE_SUB_ROUTES = {
    MAIN: '',
    OVERVIEW: 'overview',
    SETTINGS: 'settings',
    SUBSCRIPTION: 'subscription',
} as const;

const BASE_PATH = getSafePath(APP_ROUTES_MAP.PROFILE.path);

export const profileNavigation = {
    base: BASE_PATH,
};

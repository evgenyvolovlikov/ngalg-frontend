import { APP_ROUTES_MAP, getSafePath } from '@shared/config';

export const PROFILE_SUB_ROUTES = {
    MAIN: '',
} as const;

const BASE_PATH = getSafePath(APP_ROUTES_MAP.PROFILE.path);

export const authNavigation = {
    base: BASE_PATH,
};

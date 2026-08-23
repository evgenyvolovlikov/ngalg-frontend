import { APP_ROUTES_MAP, getSafePath } from '@shared/config';

export const DASHBOARD_SUB_ROUTES = {
    MAIN: '',
} as const;

const BASE_PATH = getSafePath(APP_ROUTES_MAP.DASHBOARD.path);

export const dashboardNavigation = {
    base: BASE_PATH,
};

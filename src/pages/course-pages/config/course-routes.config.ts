import { APP_ROUTES_MAP, getSafePath } from '@shared/config';

const BASE_PATH = getSafePath(APP_ROUTES_MAP.COURSE.path);

export const ARTICLE_SUB_ROUTES = {
    MAIN: '',
    CREATE: 'create',
    UPDATE: 'update',
} as const;

export const courseNavigation = {
    base: BASE_PATH,
    create: () => [BASE_PATH, ARTICLE_SUB_ROUTES.CREATE],
    update: () => [BASE_PATH, ARTICLE_SUB_ROUTES.UPDATE],
};

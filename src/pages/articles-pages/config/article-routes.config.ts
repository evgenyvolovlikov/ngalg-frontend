import { APP_ROUTES_MAP, getSafePath } from '@shared/config';

const BASE_PATH = getSafePath(APP_ROUTES_MAP.ARTICLES.path);

export const ARTICLE_SUB_ROUTES = {
    MAIN: '',
    CREATE: 'create',
    UPDATE: ':category/:slug/update',
    DETAIL: ':category/:slug',
} as const;

export const articleNavigation = {
    base: BASE_PATH,
    create: () => [BASE_PATH, ARTICLE_SUB_ROUTES.CREATE],
    detail: (category: string, slug: string) => [BASE_PATH, category, slug],
    update: (category: string, slug: string) => [BASE_PATH, category, slug, 'update'],
};

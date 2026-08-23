import { APP_ROUTES_MAP, getSafePath } from '@shared/config';

const BASE_PATH = getSafePath(APP_ROUTES_MAP.TRACKS.path);

export const TRACKS_SUB_ROUTES = {
    MAIN: '',
    DETAIL: ':category/:slug',
} as const;

export const tracksNavigation = {
    base: BASE_PATH,
    detail: (category: string, slug: string) => [BASE_PATH, category, slug],
};

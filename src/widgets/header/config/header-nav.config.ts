import { APP_ROUTES_MAP, AppRoute, RouteMap, getSafePath } from '@shared/config';

const HEADER_ROUTE_KEYS: RouteMap[] = ['DASHBOARD', 'TRACKS', 'ARTICLES', 'COURSE', 'PROFILE'];

export const HEADER_NAV_LINKS: AppRoute[] = HEADER_ROUTE_KEYS.map((key) => {
    const route = APP_ROUTES_MAP[key];

    return {
        path: getSafePath(route.path),
        label: route.label,
    };
});

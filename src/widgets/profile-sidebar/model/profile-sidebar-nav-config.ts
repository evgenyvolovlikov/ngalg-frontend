import { APP_ROUTES_MAP, PROFILE_ROUTES_MAP, ProfileRoutesMap, getSafePath } from '@shared/config';

const PROFILE_ROUTE_KEYS: ProfileRoutesMap[] = ['OVERVIEW', 'SETTINGS', 'SUBSCRIPTION'];

const BASE_PATH = getSafePath(APP_ROUTES_MAP.PROFILE.path);

export const PROFILE_NAV_LINKS = PROFILE_ROUTE_KEYS.map((key) => {
    const route = PROFILE_ROUTES_MAP[key];

    return {
        route: `${BASE_PATH}/${getSafePath(route.path)}`,
        label: route.label,
    };
});

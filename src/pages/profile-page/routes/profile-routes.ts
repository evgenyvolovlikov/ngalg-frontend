import { Routes } from '@angular/router';

import { ProfileSidebarComponent } from '@widgets/profile-sidebar';

import { PROFILE_SUB_ROUTES } from '../config/profile-routes.config';

export const PROFILE_ROUTES: Routes = [
    {
        path: '',

        loadComponent: () =>
            import('@widgets/sidebar-layout').then((m) => m.SidebarLayoutComponent),

        data: {
            sidebarComponent: ProfileSidebarComponent,
        },

        children: [
            {
                path: PROFILE_SUB_ROUTES.MAIN,
                loadComponent: () =>
                    import('../ui/profile-page/profile-page.component').then(
                        (comp) => comp.ProfilePageComponent,
                    ),
            },

            {
                path: PROFILE_SUB_ROUTES.OVERVIEW,
                loadComponent: () =>
                    import('../ui/profile-overview-page/profile-overview-page.component').then(
                        (comp) => comp.ProfileOverviewPageComponent,
                    ),
            },

            {
                path: PROFILE_SUB_ROUTES.SETTINGS,
                loadComponent: () =>
                    import('../ui/profile-settings-page/profile-settings-page.component').then(
                        (comp) => comp.ProfileSettingsPageComponent,
                    ),
            },

            {
                path: PROFILE_SUB_ROUTES.SUBSCRIPTION,
                loadComponent: () =>
                    import('../ui/profile-subscription-page/profile-subscription-page.component').then(
                        (comp) => comp.ProfileSubscriptionPageComponent,
                    ),
            },
        ],
    },
];

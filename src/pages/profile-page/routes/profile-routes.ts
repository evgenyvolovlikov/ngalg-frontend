import { Routes } from '@angular/router';

import { PROFILE_SUB_ROUTES } from '../config/profile-routes.config';

export const PROFILE_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: PROFILE_SUB_ROUTES.MAIN,
                loadComponent: () =>
                    import('../ui/profile-page.component').then(
                        (comp) => comp.ProfilePageComponent,
                    ),
            },
        ],
    },
];

import { Routes } from '@angular/router';

import { DASHBOARD_SUB_ROUTES } from '../config/dashboard-routes.config';

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: DASHBOARD_SUB_ROUTES.MAIN,
                loadComponent: () =>
                    import('../ui/dashboard-page.component').then(
                        (comp) => comp.DashboardPageComponent,
                    ),
            },
        ],
    },
];

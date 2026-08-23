import { Routes } from '@angular/router';

import { AUTH_SUB_ROUTES } from '../config/auth-routes.config';

export const AUTH_ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: AUTH_SUB_ROUTES.LOGIN,
                loadComponent: () =>
                    import('../ui/login-page/login-page.component').then(
                        (comp) => comp.LoginPageComponent,
                    ),
            },

            {
                path: AUTH_SUB_ROUTES.REGISTER,
                loadComponent: () =>
                    import('../ui/register-page/register-page.component').then(
                        (comp) => comp.RegisterPageComponent,
                    ),
            },

            {
                path: AUTH_SUB_ROUTES.RESET_PASSWORD,
                loadComponent: () =>
                    import('../ui/reset-page/reset-page.component').then(
                        (comp) => comp.ResetPageComponent,
                    ),
            },
        ],
    },
];

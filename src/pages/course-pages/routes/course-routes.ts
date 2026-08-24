import { Routes } from '@angular/router';

import { ARTICLE_SUB_ROUTES } from '../config/course-routes.config';

export const COURSE_ROUTES: Routes = [
    {
        path: '',

        loadComponent: () =>
            import('@widgets/sidebar-layout').then((m) => m.SidebarLayoutComponent),

        // data: {
        //     sidebarComponent: ArticleNavigationComponent,
        // },

        children: [
            {
                path: ARTICLE_SUB_ROUTES.MAIN,
                loadComponent: () =>
                    import('../ui/course-page/course-page.component').then(
                        (component) => component.CoursePageComponent,
                    ),
            },

            {
                path: ARTICLE_SUB_ROUTES.CREATE,
                loadComponent: () =>
                    import('../ui/course-create-page/course-create-page.component').then(
                        (component) => component.CourseCreatePageComponent,
                    ),
            },

            {
                path: ARTICLE_SUB_ROUTES.UPDATE,
                loadComponent: () =>
                    import('../ui/course-update-page/course-update-page.component').then(
                        (component) => component.CourseUpdatePageComponent,
                    ),
            },
        ],
    },
];

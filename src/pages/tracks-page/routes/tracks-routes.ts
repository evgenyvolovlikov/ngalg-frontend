import { Routes } from '@angular/router';

import { TRACKS_SUB_ROUTES } from '../config/tracks-routes.config';

export const TRACK_ROUTES: Routes = [
    {
        path: '',

        children: [
            {
                path: TRACKS_SUB_ROUTES.MAIN,
                loadComponent: () =>
                    import('../ui/tracks-page/tracks-page.component').then(
                        (component) => component.TracksPageComponent,
                    ),
            },
            {
                path: TRACKS_SUB_ROUTES.DETAIL,
                loadComponent: () =>
                    import('../ui/track-detail-page/track-detail-page.component').then(
                        (component) => component.TrackDetailPageComponent,
                    ),
            },
        ],
    },
];

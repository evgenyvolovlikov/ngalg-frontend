import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { environment } from '@src/environments/environment.development';

import { API_CONFIG, authInterceptor, errorInterceptor } from '@shared/api';

import { appRoutes } from '../routes/app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(appRoutes),
        provideZonelessChangeDetection(),
        provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
        {
            provide: API_CONFIG,
            useValue: {
                baseUrl: environment.apiUrl,
            },
        },
    ],
};

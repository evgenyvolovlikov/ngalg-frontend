import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { apiInterceptor } from '@shared/api/api.interceptor';
import { ENVIRONMENT } from '@shared/config';

import { environment } from '../environments/environment';
import { APP_ROUTES } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(APP_ROUTES, withComponentInputBinding()),
        provideHttpClient(withInterceptors([apiInterceptor])),
        {
            provide: ENVIRONMENT,
            useValue: environment,
        },
    ],
};

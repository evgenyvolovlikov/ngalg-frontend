import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withViewTransitions } from '@angular/router';

import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZonelessChangeDetection(),
        provideRouter(appRoutes, withComponentInputBinding(), withViewTransitions()),
        provideHttpClient(),
    ],
};

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { API_CONFIG, authInterceptor, errorInterceptor } from '@shared/api';

import { environment } from '../../environments/environment.development';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter([]),
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

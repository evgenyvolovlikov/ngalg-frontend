import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthLoginFormComponent } from '@features/auth-by-login';

import { AuthLayoutComponent } from '@shared/layouts/auth-layout';

@Component({
    selector: 'app-login-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'login-page.component.html',
    imports: [AuthLayoutComponent, AuthLoginFormComponent],
})
export class LoginPageComponent {}

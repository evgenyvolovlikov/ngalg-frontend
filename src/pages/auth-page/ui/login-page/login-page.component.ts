import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthLayoutComponent } from '@shared/layouts/auth-layout';

@Component({
    selector: 'app-login-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'login-page.component.html',
    imports: [AuthLayoutComponent],
})
export class LoginPageComponent {}

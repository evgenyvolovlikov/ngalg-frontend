import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthLoginFormComponent } from '@features/auth-by-login';

@Component({
    selector: 'app-login-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'login-page.component.html',
    imports: [AuthLoginFormComponent],
})
export class LoginPageComponent {}

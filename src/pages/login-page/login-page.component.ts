import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LoginComponent } from '@features/auth';

@Component({
    selector: 'app-login-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [LoginComponent],

    template: `<app-login />`,
})
export class LoginPageComponent {}

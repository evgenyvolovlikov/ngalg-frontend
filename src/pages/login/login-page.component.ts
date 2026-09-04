import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LoginComponent } from '@features/auth';

@Component({
    selector: 'app-login-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [LoginComponent],

    template: `<div><app-login /></div>`,
})
export class LoginPageComponent {}

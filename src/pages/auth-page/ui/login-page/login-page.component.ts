import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-login-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,

    templateUrl: 'login-page.component.html',
})
export class LoginPageComponent {}

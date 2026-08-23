import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthLayoutComponent } from '@shared/layouts/auth-layout';

@Component({
    selector: 'app-register-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'register-page.component.html',
    imports: [AuthLayoutComponent],
})
export class RegisterPageComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ResetPasswordFormComponent } from '@features/reset-password-form';

import { AuthLayoutComponent } from '@shared/layouts/auth-layout';

@Component({
    selector: 'app-reset-password',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'reset-page.component.html',

    imports: [AuthLayoutComponent, ResetPasswordFormComponent],
})
export class ResetPageComponent {}

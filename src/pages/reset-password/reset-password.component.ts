import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ResetPasswordComponent } from '@features/auth';

@Component({
    selector: 'app-reset-password-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,

    template: `<div><app-reset-password /></div>`,
    imports: [ResetPasswordComponent],
})
export class ResetPasswordPageComponent {}

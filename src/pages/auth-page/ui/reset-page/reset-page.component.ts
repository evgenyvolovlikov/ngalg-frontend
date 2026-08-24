import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ResetPasswordFormComponent } from '@features/reset-password-form';

@Component({
    selector: 'app-reset-password',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'reset-page.component.html',

    imports: [ResetPasswordFormComponent],
})
export class ResetPageComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthLayoutComponent } from '@shared/layouts/auth-layout';

@Component({
    selector: 'app-reset-password',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'reset-page.component.html',

    imports: [AuthLayoutComponent],
})
export class ResetPageComponent {}

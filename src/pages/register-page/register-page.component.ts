import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RegisterComponent } from '@features/auth-user';

@Component({
    selector: 'app-register-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,

    template: `<app-register />`,
    imports: [RegisterComponent],
})
export class RegisterPageComponent {}

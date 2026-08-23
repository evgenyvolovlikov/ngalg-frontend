import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RegisterByEmailComponent } from '@features/register-by-email';

import { AuthLayoutComponent } from '@shared/layouts/auth-layout';

@Component({
    selector: 'app-register-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'register-page.component.html',
    imports: [AuthLayoutComponent, RegisterByEmailComponent],
})
export class RegisterPageComponent {}

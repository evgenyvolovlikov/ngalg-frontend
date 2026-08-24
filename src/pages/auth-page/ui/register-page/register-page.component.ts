import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RegisterByEmailComponent } from '@features/register-by-email';

@Component({
    selector: 'app-register-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'register-page.component.html',
    imports: [RegisterByEmailComponent],
})
export class RegisterPageComponent {}

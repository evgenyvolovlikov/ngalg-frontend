import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-register-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'register-page.component.html',
})
export class RegisterPageComponent {}

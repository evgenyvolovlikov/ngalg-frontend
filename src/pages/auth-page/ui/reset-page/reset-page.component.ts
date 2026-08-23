import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-reset-password',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'reset-page.component.html',
})
export class ResetPageComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-account-overview-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: ` <div>Account Overview</div> `,
})
export class AccountOverviewPageComponent {}

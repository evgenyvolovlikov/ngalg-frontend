import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MainLayoutComponent } from '@shared/layouts/main-layout';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,

    templateUrl: 'landing-page.component.html',
    styleUrl: 'landing-page.component.scss',

    providers: [],
    imports: [MainLayoutComponent],
})
export class LandingPageComponent {}

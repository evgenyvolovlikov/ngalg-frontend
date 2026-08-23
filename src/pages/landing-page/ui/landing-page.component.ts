import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'landing-page.component.html',
    styleUrl: 'landing-page.component.scss',
})
export class LandingPageComponent {}

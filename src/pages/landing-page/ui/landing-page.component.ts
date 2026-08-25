import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LandingFaqComponent } from '@widgets/landing-faq';
import { LandingFeaturesComponent } from '@widgets/landing-features';
import { LandingHeroComponent } from '@widgets/landing-hero';
import { LandingMetricsComponent } from '@widgets/landing-metrics';
import { LandingPricingComponent } from '@widgets/landing-pricing';
import { LandingProblemSolutionComponent } from '@widgets/landing-problem-solution';
import { LandingStepsComponent } from '@widgets/landing-steps';

@Component({
    selector: 'app-landing-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'landing-page.component.html',
    styleUrl: 'landing-page.component.scss',

    imports: [
        LandingHeroComponent,
        LandingMetricsComponent,
        LandingProblemSolutionComponent,
        LandingFeaturesComponent,
        LandingStepsComponent,
        LandingPricingComponent,
        LandingFaqComponent,
    ],
})
export class LandingPageComponent {}

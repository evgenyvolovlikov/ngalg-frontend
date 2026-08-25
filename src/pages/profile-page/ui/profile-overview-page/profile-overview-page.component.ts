import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ActivityTimelineComponent } from '@widgets/activity-timeline';
import { EngineerAuditComponent } from '@widgets/engineer-audit';
import { ProofOfWorkBoardComponent } from '@widgets/proof-of-work-board';

// import { ReadinessRadarComponent } from '@widgets/readiness-radar';

@Component({
    selector: 'app-profile-overview-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'profile-overview-page.component.html',
    styleUrl: 'profile-overview-page.component.scss',
    imports: [
        ActivityTimelineComponent,
        // ReadinessRadarComponent,
        EngineerAuditComponent,
        ProofOfWorkBoardComponent,
    ],
})
export class ProfileOverviewPageComponent {}

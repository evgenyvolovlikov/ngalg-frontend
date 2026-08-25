import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ActivityTimelineComponent } from '@widgets/activity-timeline';
import { InterviewSectionBoardComponent } from '@widgets/interview-section-board';
import { ReadinessRadarComponent } from '@widgets/readiness-radar';

@Component({
    selector: 'app-dashboard-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.scss',
    imports: [ReadinessRadarComponent, InterviewSectionBoardComponent, ActivityTimelineComponent],
})
export class DashboardPageComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { InterviewSectionBoardComponent } from '@widgets/interview-section-board';

@Component({
    selector: 'app-dashboard-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './dashboard-page.component.html',
    styleUrl: './dashboard-page.component.scss',
    imports: [InterviewSectionBoardComponent],
})
export class DashboardPageComponent {}

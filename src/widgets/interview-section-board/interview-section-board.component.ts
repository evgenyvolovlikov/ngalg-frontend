import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { InterviewSectionStore, SectionCardComponent } from '@entities/interview-section';
import { PremiumGuardComponent } from '@features/premium-guard';
import { StartActionComponent } from '@features/start-action';

import { TerminalContainerComponent } from '@shared/ui/terminal-container';

@Component({
    selector: 'app-interview-section-board',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './interview-section-board.component.html',
    styleUrl: './interview-section-board.component.scss',
    imports: [
        TerminalContainerComponent,
        SectionCardComponent,
        StartActionComponent,
        PremiumGuardComponent,
    ],
})
export class InterviewSectionBoardComponent {
    private readonly interviewSectionStore = inject(InterviewSectionStore);

    /** Список всех алгоритмических секций */
    protected readonly sections = this.interviewSectionStore.sections;
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ProgressBarComponent } from '@shared/ui/progress-bar';

import { InterviewSection } from '../../model/interview-section.types';

@Component({
    selector: 'app-section-card',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './section-card.component.html',
    styleUrl: './section-card.component.scss',
    imports: [ProgressBarComponent],
})
export class SectionCardComponent {
    readonly section = input.required<InterviewSection>();
}

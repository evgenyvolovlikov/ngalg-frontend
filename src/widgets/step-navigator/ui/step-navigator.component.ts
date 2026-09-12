import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { TestResult, TrackStepEntity, TrackStepNavItem } from '@entities/track';

import { BadgeComponent } from '@shared/ui/badge';
import { IconComponent } from '@shared/ui/icon';
import { TerminalContainerComponent } from '@shared/ui/terminal-container';

type TrackStepDetailItem = Omit<TrackStepEntity, 'createdAt' | 'updatedAt'>;

@Component({
    selector: 'app-step-navigator',
    standalone: true,
    imports: [CommonModule, BadgeComponent, IconComponent, TerminalContainerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './step-navigator.component.html',
    styleUrl: './step-navigator.component.scss',
})
export class StepNavigatorWidgetComponent {
    public steps = input<TrackStepNavItem[]>([]);
    public step = input<TrackStepDetailItem | null | undefined>(null);
    public testResults = input<TestResult[]>([]);

    public isRunningTests = input<boolean>(false);
    public isCommitting = input<boolean>(false);

    public runTests = output<void>();
    public commitCode = output<void>();
    public selectStep = output<string>();
}

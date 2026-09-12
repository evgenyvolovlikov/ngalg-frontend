import { ChangeDetectionStrategy, Component, effect, inject, input } from '@angular/core';

import { StepNavigatorWidgetComponent } from '@widgets/step-navigator';
import { TrackWorkspaceWidgetComponent } from '@widgets/track-workspace';

import { TrackStore } from '@entities/track';

import { SplitPaneComponent } from '@shared/ui/splite-pane';

@Component({
    selector: 'app-track-details-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TrackStore],
    styleUrl: './track-details-page.component.scss',
    template: `
        <div class="track-layout">
            @if (store.isLoading() && !store.currentTrack()) {
                <div class="loading">Загрузка трека...</div>
            } @else if (store.error()) {
                <div class="error">Ошибка: {{ store.error() }}</div>
            } @else {
                <app-split-pane direction="horizontal" [initialSplit]="25">
                    <div pane-first class="track-layout__sidebar">
                        <app-step-navigator
                            [steps]="store.steps()"
                            [step]="store.step()"
                            [testResults]="store.testResults()"
                            [isRunningTests]="store.isRunningTests()"
                            [isCommitting]="store.isLoading()"
                            (runTests)="store.executeTests()"
                            (selectStep)="store.selectStep($event)"
                        />
                    </div>

                    <app-split-pane pane-second direction="horizontal" [initialSplit]="56">
                        <div pane-first class="track-layout__editor">
                            <app-track-workspace />
                        </div>
                        <div pane-second class="track-layout__ai">
                            <p>Правая панель (AI Interviewer)</p>
                        </div>
                    </app-split-pane>
                </app-split-pane>
            }
        </div>
    `,
    imports: [SplitPaneComponent, StepNavigatorWidgetComponent, TrackWorkspaceWidgetComponent],
})
export class TrackDetailsPageComponent {
    protected readonly store = inject(TrackStore);
    public slug = input.required<string>();

    constructor() {
        effect(() => {
            const trackSlug = this.slug();
            if (trackSlug) {
                this.store.loadTrackDetail(trackSlug);
            }
        });
    }
}

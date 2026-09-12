import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-track-step-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<div>Track Step Page</div>`,
})
export class TrackStepPageComponent {}

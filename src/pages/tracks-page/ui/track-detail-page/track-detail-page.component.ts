import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-track-detail-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'track-detail-page.component.html',
    styleUrl: 'track-detail-page.component.scss',
})
export class TrackDetailPageComponent {}

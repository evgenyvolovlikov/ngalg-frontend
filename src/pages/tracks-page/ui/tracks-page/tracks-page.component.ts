import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-tracks-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'tracks-page.component.html',
    styleUrl: 'tracks-page.component.scss',
})
export class TracksPageComponent {}

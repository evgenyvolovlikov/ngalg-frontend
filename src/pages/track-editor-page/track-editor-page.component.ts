import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-track-editor-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<div>Track Editor Page</div>`,
})
export class TrackEditorPageComponent {}

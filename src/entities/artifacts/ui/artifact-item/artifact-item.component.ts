import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Artifact } from '../../model/artifact.model';

@Component({
    selector: 'app-artifact-item',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './artifact-item.component.html',
    styleUrl: './artifact-item.component.scss',
})
export class ArtifactItemComponent {
    public readonly artifact = input.required<Artifact>();
}

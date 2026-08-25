import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { ArtifactItemComponent, ArtifactStore } from '@entities/artifacts';
import { ExportActionsComponent } from '@features/export-portfolio';

import { TerminalContainerComponent } from '@shared/ui/terminal-container';

@Component({
    selector: 'app-proof-of-work-board',
    standalone: true,
    imports: [TerminalContainerComponent, ArtifactItemComponent, ExportActionsComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './proof-of-work-board.component.html',
    styleUrl: './proof-of-work-board.component.scss',
})
export class ProofOfWorkBoardComponent {
    private readonly artifactStore = inject(ArtifactStore);

    public readonly artifacts = this.artifactStore.artifacts;
    public readonly availableForCompilation = this.artifactStore.availableForCompilation;
    public readonly readinessPercentage = this.artifactStore.readinessPercentage;
}

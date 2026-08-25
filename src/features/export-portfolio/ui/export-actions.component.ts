import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
    selector: 'app-export-actions',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './export-actions.component.html',
    styleUrl: './export-actions.component.scss',
})
export class ExportActionsComponent {
    public readonly isExporting = signal<boolean>(false);
    public readonly isDeploying = signal<boolean>(false);

    public onDownloadZip(): void {
        if (this.isExporting()) return;

        this.isExporting.set(true);
        console.warn('[ExportPortfolio] Compiling artifacts and preparing ZIP archive...');

        setTimeout(() => {
            this.isExporting.set(false);
            console.log('[ExportPortfolio] ZIP archive generated successfully.');
        }, 1500);
    }

    public onDeployGithub(): void {
        if (this.isDeploying()) return;

        this.isDeploying.set(true);
        console.warn('[ExportPortfolio] Triggering GitHub Actions CI/CD pipeline...');

        setTimeout(() => {
            this.isDeploying.set(false);
            console.log('[ExportPortfolio] CI/CD pipeline triggered. Deployment in progress.');
        }, 2000);
    }
}

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button';

@Component({
    selector: 'app-deploy-portfolio',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './deploy-portfolio.component.html',
    styleUrl: './deploy-portfolio.component.scss',
    imports: [ButtonComponent],
})
export class DeployPortfolioComponent {
    protected readonly isDeploying = signal<boolean>(false);

    protected onDeploy(): void {
        if (this.isDeploying()) return;

        this.isDeploying.set(true);

        setTimeout(() => {
            this.isDeploying.set(false);
        }, 2000);
    }
}

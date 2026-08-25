import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { UserStore } from '@entities/user';

import { TerminalContainerComponent } from '@shared/ui/terminal-container';

@Component({
    selector: 'app-engineer-audit',
    standalone: true,
    imports: [TerminalContainerComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './engineer-audit.component.html',
    styleUrl: './engineer-audit.component.scss',
})
export class EngineerAuditComponent {
    private readonly userStore = inject(UserStore);
    public readonly profile = this.userStore.profile;
}

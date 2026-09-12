import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { TrackStore } from '@entities/track';

import { ButtonComponent } from '@shared/ui/button';
import { CodeEditorComponent } from '@shared/ui/code-editor';
import { IconComponent } from '@shared/ui/icon';

@Component({
    selector: 'app-track-workspace',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CodeEditorComponent, ButtonComponent, IconComponent],
    template: `
        <div class="workspace-body">
            <app-code-editor [(code)]="currentCode" />
        </div>
        <footer class="workspace-footer">
            <button
                app-button
                variant="filled"
                color="primary"
                class="action-button"
                [disabled]="store.isLoading() || store.isRunningTests()"
                (click)="onCommitSolution()"
            >
                <app-icon name="check" />
                Отправить решение
            </button>
        </footer>
    `,
    styles: [
        `
            :host {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }

            .workspace-body {
                flex: 1;
                min-height: 0;
            }

            .workspace-footer {
                padding: var(--unit-4);
                background-color: var(--bg-surface);
                border-top: 1px solid var(--border-color);
            }

            .action-button {
                display: flex;
                gap: var(--unit-2);
                justify-content: center;
                align-items: center;
                width: 100%;
                padding: var(--unit-2) var(--unit-4);
                background-color: var(--color-primary-bg);
                border: 1px solid var(--color-primary);
                border-radius: var(--radius-sm);
                font-family: var(--font-family-sans);
                font-size: var(--font-size-sm);
                font-weight: var(--font-weight-medium);
                color: var(--color-primary);
                transition: background-color var(--transition-fast);
                cursor: pointer;
            }

            .action-button:hover:not(:disabled) {
                background-color: var(--color-primary);
                color: var(--text-on-contrast);
            }

            .action-button:disabled {
                opacity: var(--opacity-disabled);
                cursor: not-allowed;
            }
        `,
    ],
})
export class TrackWorkspaceWidgetComponent {
    protected readonly store = inject(TrackStore);
    protected readonly currentCode = signal<string>('');

    protected onCommitSolution(): void {
        const currentStep = this.store.step();

        if (!currentStep) return;

        this.store.commitSolution({
            stepId: currentStep.id,
            code: this.currentCode(),
        });
    }
}

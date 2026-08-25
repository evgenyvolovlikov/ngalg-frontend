import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
    selector: 'app-premium-guard',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './premium-guard.component.html',
    styleUrl: './premium-guard.component.scss',
})
export class PremiumGuardComponent {
    /** Идентификатор заблокированной секции */
    readonly sectionId = input.required<string>();

    /** Событие попытки разблокировки */
    readonly unlockAttempt = output<string>();

    protected onUnlockAttempt(): void {
        this.unlockAttempt.emit(this.sectionId());
    }
}

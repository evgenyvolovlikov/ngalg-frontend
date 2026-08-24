import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

import { CheckboxComponent } from '@shared/ui/checkbox';

@Component({
    selector: 'app-mark-watched-checkbox',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './mark-watched-checkbox.component.html',
    styleUrl: './mark-watched-checkbox.component.scss',
    imports: [CheckboxComponent],
})
export class MarkWatchedCheckboxComponent {
    /** Идентификатор урока */
    readonly lessonId = input.required<string>();

    /** Статус просмотра урока */
    readonly isWatched = input.required<boolean>();

    /** Событие переключения статуса */
    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly toggle = output<{ id: string; watched: boolean }>();

    /** Индикатор загрузки асинхронного запроса */
    protected readonly isLoading = signal<boolean>(false);

    protected onCheckedChange(checked: boolean): void {
        if (this.isLoading()) return;

        this.toggle.emit({
            id: this.lessonId(),
            watched: checked,
        });
    }
}

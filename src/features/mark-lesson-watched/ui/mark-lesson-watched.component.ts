import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { CheckboxComponent } from '@shared/ui/checkbox';

@Component({
    selector: 'app-mark-lesson-watched',
    standalone: true,
    imports: [CheckboxComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <app-checkbox [checked]="isCompleted()" (checkedChange)="onToggle($event)">
            Пройдено
        </app-checkbox>
    `,
})
export class MarkLessonWatchedComponent {
    readonly lessonId = input.required<string>();
    readonly isCompleted = input<boolean>(false);

    // Передаем объект с ID и новым статусом, чтобы родитель точно знал, что делать
    readonly toggleComplete = output<{ id: string; completed: boolean }>();

    protected onToggle(newStatus: boolean): void {
        this.toggleComplete.emit({
            id: this.lessonId(),
            completed: newStatus,
        });
    }
}

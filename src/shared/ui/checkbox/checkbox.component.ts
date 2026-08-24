import { ChangeDetectionStrategy, Component, input, model } from '@angular/core';

let nextUniqueId = 0;

@Component({
    selector: 'app-checkbox',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './checkbox.component.html',
    styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
    /** Состояние чекбокса (поддерживает двухстороннее связывание [(checked)]) */
    readonly checked = model<boolean>(false);

    /** Блокировка взаимодействия */
    readonly disabled = input<boolean>(false);

    /** Идентификатор поля ввода */
    readonly inputId = input<string>(`app-checkbox-${++nextUniqueId}`);

    protected onChange(event: Event): void {
        const inputElement = event.target as HTMLInputElement;
        this.checked.set(inputElement.checked);
    }
}

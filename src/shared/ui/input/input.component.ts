/* eslint-disable @typescript-eslint/no-empty-function */
import {
    ChangeDetectionStrategy,
    Component,
    booleanAttribute,
    computed,
    forwardRef,
    input,
    signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-input',
    standalone: true,
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputComponent),
            multi: true,
        },
    ],
})
export class InputComponent implements ControlValueAccessor {
    type = input<'text' | 'password' | 'email'>('text');
    label = input<string>('');
    placeholder = input<string>('');
    errorMessage = input<string>('');

    readonly = input<boolean, boolean | string>(false, { transform: booleanAttribute });

    id = input<string>(`input-${Math.random().toString(36).substring(2, 9)}`);

    value = signal<string>('');
    formDisabled = signal<boolean>(false);
    isPasswordVisible = signal<boolean>(false);

    isDisabled = computed(() => this.formDisabled());
    inputType = computed(() =>
        this.type() === 'password' && this.isPasswordVisible() ? 'text' : this.type(),
    );

    onChange: (value: string) => void = () => {};
    onTouched: () => void = () => {};

    writeValue(val: string | null): void {
        this.value.set(val ?? '');
    }

    registerOnChange(fn: (value: string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        this.formDisabled.set(isDisabled);
    }

    onInput(event: Event): void {
        const newValue = (event.target as HTMLInputElement).value;
        this.value.set(newValue);
        this.onChange(newValue);
    }

    onBlur(): void {
        this.onTouched();
    }

    togglePasswordVisibility(event: MouseEvent): void {
        event.stopPropagation();
        if (!this.isDisabled()) {
            this.isPasswordVisible.update((v) => !v);
        }
    }
}

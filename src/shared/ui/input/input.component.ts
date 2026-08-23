import {
    ChangeDetectionStrategy,
    Component,
    computed,
    forwardRef,
    input,
    model,
    signal,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
export type InputSize = 'sm' | 'md' | 'lg';

let uniqueIdCounter = 0;

@Component({
    selector: 'app-input',
    standalone: true,
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
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
    private readonly defaultId = `app-input-${uniqueIdCounter++}`;

    readonly value = model<string>('');

    readonly id = input<string>();
    readonly label = input<string>('');
    readonly placeholder = input<string>('');
    readonly type = input<InputType>('text');
    readonly size = input<InputSize>('md');
    readonly error = input<string | null>(null);
    readonly disabled = input<boolean>(false);
    readonly readonly = input<boolean>(false);
    readonly autocomplete = input<string>('off');

    protected readonly formDisabled = signal<boolean>(false);
    protected readonly showPassword = signal<boolean>(false);

    protected readonly inputId = computed(() => this.id() ?? this.defaultId);
    protected readonly errorId = computed(() => `${this.inputId()}-error`);

    protected readonly isDisabled = computed(() => this.disabled() || this.formDisabled());

    protected readonly currentType = computed(() => {
        if (this.type() === 'password' && this.showPassword()) {
            return 'text';
        }
        return this.type();
    });

    protected readonly containerClasses = computed(() =>
        [
            'input-container',
            `input-container--${this.size()}`,
            this.error() ? 'input-container--error' : '',
            this.isDisabled() ? 'input-container--disabled' : '',
        ]
            .filter(Boolean)
            .join(' '),
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
    onChange = (_value: string): void => {};
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onTouched = (): void => {};

    writeValue(value: string | null): void {
        this.value.set(value ?? '');
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

    protected onInput(event: Event): void {
        const val = (event.target as HTMLInputElement).value;
        this.value.set(val);
        this.onChange(val);
    }

    protected onBlur(): void {
        this.onTouched();
    }

    protected togglePasswordVisibility(): void {
        this.showPassword.update((show) => !show);
    }
}

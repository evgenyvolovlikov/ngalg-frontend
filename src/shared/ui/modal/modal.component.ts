import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    effect,
    input,
    model,
    output,
    viewChild,
} from '@angular/core';

@Component({
    selector: 'app-modal',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './modal.component.html',
    styleUrl: './modal.component.scss',
})
export class ModalComponent {
    readonly isOpen = model<boolean>(false);

    readonly title = input<string>('');

    readonly closed = output<void>();

    private readonly dialogRef = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');

    constructor() {
        effect(() => {
            const dialog = this.dialogRef().nativeElement;
            const open = this.isOpen();

            if (open && !dialog.open) {
                dialog.showModal();
            } else if (!open && dialog.open) {
                dialog.close();
            }
        });
    }

    protected onDialogClose(): void {
        if (this.isOpen()) {
            this.isOpen.set(false);
            this.closed.emit();
        }
    }

    protected onBackdropClick(event: MouseEvent): void {
        if (event.target === this.dialogRef().nativeElement) {
            this.isOpen.set(false);
            this.closed.emit();
        }
    }
}

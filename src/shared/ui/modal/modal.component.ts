import { ChangeDetectionStrategy, Component, HostListener, input, output } from '@angular/core';

@Component({
    selector: 'app-modal',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    readonly title = input<string>();
    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly close = output<void>();

    @HostListener('document:keydown.escape')
    protected onEscape(): void {
        this.close.emit();
    }

    protected onBackdropClick(event: MouseEvent): void {
        if (event.target === event.currentTarget) {
            this.close.emit();
        }
    }
}

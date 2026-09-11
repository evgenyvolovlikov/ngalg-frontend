import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    NgZone,
    OnDestroy,
    OnInit,
    Renderer2,
    inject,
    input,
    signal,
} from '@angular/core';

export type SplitDirection = 'horizontal' | 'vertical';

@Component({
    selector: 'app-split-pane',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './split-pane.component.html',
    styleUrl: './split-pane.component.scss',
})
export class SplitPaneComponent implements OnInit, OnDestroy {
    readonly direction = input<SplitDirection>('horizontal');
    readonly initialSplit = input<number>(50);

    private readonly elRef = inject(ElementRef);
    private readonly renderer = inject(Renderer2);
    private readonly ngZone = inject(NgZone);

    readonly splitPercent = signal<number>(50);
    readonly isDragging = signal<boolean>(false);

    private unlistenMouseMove: (() => void) | undefined;
    private unlistenMouseUp: (() => void) | undefined;

    ngOnInit(): void {
        this.splitPercent.set(this.initialSplit());
    }

    ngOnDestroy(): void {
        this.cleanupListeners();
    }

    protected startDrag(event: MouseEvent): void {
        this.isDragging.set(true);
        event.preventDefault();

        this.ngZone.runOutsideAngular(() => {
            this.unlistenMouseMove = this.renderer.listen('document', 'mousemove', (e) =>
                this.onDrag(e),
            );
            this.unlistenMouseUp = this.renderer.listen('document', 'mouseup', () =>
                this.stopDrag(),
            );
        });
    }

    private onDrag(event: MouseEvent): void {
        if (!this.isDragging()) return;

        const hostEl = this.elRef.nativeElement.getBoundingClientRect();
        let newPercent = 50;

        if (this.direction() === 'horizontal') {
            const x = event.clientX - hostEl.left;
            newPercent = (x / hostEl.width) * 100;
        } else {
            const y = event.clientY - hostEl.top;
            newPercent = (y / hostEl.height) * 100;
        }

        newPercent = Math.max(10, Math.min(newPercent, 90));

        this.ngZone.run(() => {
            this.splitPercent.set(newPercent);
        });
    }

    private stopDrag(): void {
        if (!this.isDragging()) return;

        this.ngZone.run(() => {
            this.isDragging.set(false);
        });
        this.cleanupListeners();
    }

    private cleanupListeners(): void {
        this.unlistenMouseMove?.();
        this.unlistenMouseUp?.();
        this.unlistenMouseMove = undefined;
        this.unlistenMouseUp = undefined;
    }

    protected onKeyDown(event: KeyboardEvent): void {
        const step = 5;
        if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
            this.splitPercent.update((v) => Math.max(10, v - step));
            event.preventDefault();
        } else if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
            this.splitPercent.update((v) => Math.min(90, v + step));
            event.preventDefault();
        }
    }
}

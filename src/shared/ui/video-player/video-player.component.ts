import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';

@Component({
    selector: 'app-video-player',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './video-player.component.html',
    styleUrl: './video-player.component.scss',
})
export class VideoPlayerComponent {
    readonly src = input.required<string>();
    readonly poster = input<string>('');

    // eslint-disable-next-line @angular-eslint/no-output-native
    readonly ended = output<void>();

    protected readonly hasError = signal<boolean>(false);

    protected onError(): void {
        this.hasError.set(true);
    }

    protected onEnded(): void {
        this.ended.emit();
    }
}

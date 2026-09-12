import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-terminal-container',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './terminal-container.component.html',
    styleUrl: './terminal-container.component.scss',
})
export class TerminalContainerComponent {
    public readonly title = input<string>();
}

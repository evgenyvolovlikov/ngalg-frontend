import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-terminal-container',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './terminal-container.component.html',
    styleUrl: './terminal-container.component.scss',
})
export class TerminalContainerComponent {
    /** Заголовок терминального блока */
    readonly title = input<string>();
}

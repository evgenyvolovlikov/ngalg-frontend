import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-start-action',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './start-action.component.html',
    styleUrl: './start-action.component.scss',
    imports: [RouterLink],
})
export class StartActionComponent {
    /** Идентификатор секции для навигации */
    readonly sectionId = input.required<string>();
}

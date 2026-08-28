import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-accordion',
    standalone: true,
    template: `
        <details class="accordion" [open]="isOpen()">
            <summary class="accordion__summary">
                <ng-content select="[accordion-title]"></ng-content>
            </summary>
            <div class="accordion__content">
                <ng-content></ng-content>
            </div>
        </details>
    `,
    styleUrl: './accordion.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
    isOpen = input<boolean>(false);
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { NoteBlockData } from '../../../model/article.types';

@Component({
    selector: 'app-article-block-note',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            .callout-box {
                display: flex;
                gap: var(--unit-3);
                padding: var(--unit-4);
                border-radius: var(--radius-sm) var(--radius-md) var(--radius-md) var(--radius-sm);
                border-left: var(--unit-1) solid var(--border-color);
                box-shadow: var(--shadow-sm);
            }
            .callout-box[data-variant='INFO'] {
                background-color: var(--color-info-bg);
                color: var(--color-info);
                border-left-color: var(--color-info);
            }
            .callout-box[data-variant='WARNING'] {
                background-color: var(--color-warning-bg);
                color: var(--color-warning);
                border-left-color: var(--color-warning);
            }
            .callout-box[data-variant='ERROR'] {
                background-color: var(--color-error-bg);
                color: var(--color-error);
                border-left-color: var(--color-error);
            }
            .callout-box__icon {
                flex-shrink: 0;
                width: var(--font-size-xl);
                height: var(--font-size-xl);
                display: flex;
                align-items: center;
            }
            .callout-box__content {
                font-size: var(--font-size-base);
                line-height: var(--line-height-relaxed);
                color: var(--text-color);
            }
        `,
    ],
    template: `
        <div class="callout-box" [attr.data-variant]="data().noteType">
            <div class="callout-box__icon" aria-hidden="true">
                @switch (data().noteType) {
                    @case ('WARNING') {
                        <svg
                            xmlns="http://w3.org"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
                            />
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                        </svg>
                    }
                    @case ('ERROR') {
                        <svg
                            xmlns="http://w3.org"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="m15 9-6 6" />
                            <path d="m9 9 6 6" />
                        </svg>
                    }
                    @default {
                        <svg
                            xmlns="http://w3.org"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 16v-4" />
                            <path d="M12 8h.01" />
                        </svg>
                    }
                }
            </div>
            <div class="callout-box__content">{{ data().text }}</div>
        </div>
    `,
})
export class ArticleBlockNoteComponent {
    readonly data = input.required<NoteBlockData>();
}

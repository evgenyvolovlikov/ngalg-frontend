import { LowerCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CodeBlockData } from '../../../model/article.types';

@Component({
    selector: 'app-article-block-code',
    standalone: true,
    imports: [LowerCasePipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="code-snippet">
            <div class="code-snippet__header">
                <span class="code-snippet__filename">
                    {{ data().filename || (data().language | lowercase) }}
                </span>
            </div>
            <pre
                class="code-snippet__body"
            ><code [class]="'code-snippet__code language-' + data().language">{{ data().code }}</code></pre>
        </div>
    `,
    styles: [
        `
            .code-snippet {
                background-color: var(--bg-surface);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                overflow: hidden;
                box-shadow: var(--shadow-sm);
            }
            .code-snippet__header {
                display: flex;
                align-items: center;
                padding: var(--unit-2) var(--unit-4);
                background-color: var(--bg-surface-hover);
                border-bottom: 1px solid var(--border-color);
            }
            .code-snippet__filename {
                font-family: var(--font-family-mono, monospace);
                font-size: var(--font-size-xs);
                color: var(--text-muted);
                font-weight: var(--font-weight-medium);
            }
            .code-snippet__body {
                margin: 0;
                padding: var(--unit-4);
                overflow-x: auto;
                background-color: transparent;
            }
            .code-snippet__code {
                font-family: var(--font-family-mono, monospace);
                font-size: var(--font-size-sm);
                line-height: var(--line-height-base);
                color: var(--text-color);
            }
        `,
    ],
})
export class ArticleBlockCodeComponent {
    readonly data = input.required<CodeBlockData>();
}

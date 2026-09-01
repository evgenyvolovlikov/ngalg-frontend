import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ComplexityBlockData } from '../../../model/article.types';

@Component({
    selector: 'app-article-block-complexity',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            .complexity-widget {
                display: flex;
                flex-direction: column;
                gap: var(--unit-4);
                padding: var(--unit-5);
                background-color: var(--bg-surface);
                border: 1px solid var(--border-color);
                border-radius: var(--radius-md);
                box-shadow: var(--shadow-sm);
            }
            .complexity-widget__grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: var(--unit-4);
                margin: 0;
            }
            .complexity-card {
                display: flex;
                flex-direction: column;
                gap: var(--unit-1);
                padding: var(--unit-3) var(--unit-4);
                background-color: var(--bg-surface-hover);
                border-radius: var(--radius-sm);
                border: 1px solid var(--border-color);
            }
            .complexity-card__label {
                font-size: var(--font-size-xs);
                font-weight: var(--font-weight-bold);
                color: var(--text-muted);
                text-transform: uppercase;
                letter-spacing: 0.05em;
            }
            .complexity-card__value {
                margin: 0;
                font-family: var(--font-family-mono, monospace);
                font-size: var(--font-size-lg);
                font-weight: var(--font-weight-bold);
                color: var(--color-primary);
            }
            .complexity-widget__description {
                margin: 0;
                font-size: var(--font-size-sm);
                line-height: var(--line-height-base);
                color: var(--text-muted);
            }
        `,
    ],
    template: `
        <div class="complexity-widget">
            <dl class="complexity-widget__grid">
                <div class="complexity-card">
                    <dt class="complexity-card__label">Временная сложность</dt>
                    <dd class="complexity-card__value">{{ data().time }}</dd>
                </div>
                <div class="complexity-card">
                    <dt class="complexity-card__label">Пространственная сложность</dt>
                    <dd class="complexity-card__value">{{ data().space }}</dd>
                </div>
            </dl>
            @if (data().description) {
                <p class="complexity-widget__description">{{ data().description }}</p>
            }
        </div>
    `,
})
export class ArticleBlockComplexityComponent {
    readonly data = input.required<ComplexityBlockData>();
}

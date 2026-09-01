import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { FeaturesBlockData } from '../../../model/article.types';

@Component({
    selector: 'app-article-block-features',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [
        `
            .features-list__title {
                margin: 0 0 var(--unit-3);
                font-size: var(--font-size-lg);
                font-weight: var(--font-weight-bold);
            }
            .features-list__wrapper {
                display: flex;
                flex-direction: column;
                gap: var(--unit-3);
                margin: 0;
                padding-left: var(--unit-4);
            }
            .features-list__item {
                line-height: var(--line-height-relaxed);
                list-style-type: '⚡ ';
                padding-left: var(--unit-1);
            }
            .keyword {
                color: var(--text-color);
                font-weight: var(--font-weight-bold);
            }
            .text {
                color: var(--text-muted);
            }
        `,
    ],
    template: `
        <div class="features-list">
            @if (data().sectionTitle) {
                <h3 class="features-list__title">{{ data().sectionTitle }}</h3>
            }
            <ul class="features-list__wrapper">
                @for (item of data().items; track item.title) {
                    <li class="features-list__item">
                        <strong class="keyword">{{ item.title }}</strong>
                        <span class="text"> — {{ item.text }}</span>
                    </li>
                }
            </ul>
        </div>
    `,
})
export class ArticleBlockFeaturesComponent {
    readonly data = input.required<FeaturesBlockData>();
}

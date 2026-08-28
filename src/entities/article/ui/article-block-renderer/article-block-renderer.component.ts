import { NgComponentOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { ArticleContentBlock } from '../../model/article.types';
import { ARTICLE_BLOCK_REGISTRY } from './article-block-registry';

@Component({
    selector: 'app-article-block-renderer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgComponentOutlet],
    styleUrl: './article-block-renderer.component.scss',
    template: `
        @if (componentType(); as cmp) {
            <ng-container *ngComponentOutlet="cmp; inputs: { data: block().data }" />
        }
    `,
})
export class ArticleBlockRendererComponent {
    readonly block = input.required<ArticleContentBlock>();
    readonly componentType = computed(() => ARTICLE_BLOCK_REGISTRY[this.block().type] ?? null);
}

import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import DOMPurify from 'dompurify';

import { MarkdownRendererComponent } from '@shared/ui/markdown-renderer';

import { TextBlockData } from '../../model/article.types';

@Component({
    selector: 'app-article-block-text',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MarkdownRendererComponent],
    template: `
        @if (data().format === 'MARKDOWN') {
            <app-markdown-renderer [rawMarkdown]="data().content" />
        } @else if (data().format === 'HTML') {
            <div [innerHTML]="sanitizedHtml()"></div>
        } @else {
            <p class="error-text">Неизвестный формат текста</p>
        }
    `,
})
export class ArticleBlockTextComponent {
    readonly data = input.required<TextBlockData>();

    sanitizedHtml = computed(() => {
        const blockData = this.data();
        if (blockData.format === 'HTML' && blockData.content) {
            return DOMPurify.sanitize(blockData.content);
        }
        return '';
    });
}

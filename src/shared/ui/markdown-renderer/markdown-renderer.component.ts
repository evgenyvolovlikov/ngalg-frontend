import { isPlatformBrowser } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    PLATFORM_ID,
    ViewEncapsulation,
    computed,
    inject,
    input,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import DOMPurify from 'dompurify';
import { marked } from 'marked';

// Настройка marked: открытие внешних ссылок в новой вкладке с защитой
const renderer = new marked.Renderer();
renderer.link = ({ href, title, text }) => {
    const titleAttr = title ? ` title="${title}"` : '';
    const isExternal = href.startsWith('http://') || href.startsWith('https://');
    const targetRel = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';

    return `<a href="${href}"${titleAttr}${targetRel}>${text}</a>`;
};

marked.use({ renderer });

@Component({
    selector: 'app-markdown-renderer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    styleUrl: './markdown-renderer.component.scss',
    template: ` <div class="markdown-body" [innerHTML]="parsedHtml()"></div> `,
})
export class MarkdownRendererComponent {
    private readonly sanitizer = inject(DomSanitizer);
    private readonly platformId = inject(PLATFORM_ID);

    readonly rawMarkdown = input.required<string>();

    readonly parsedHtml = computed<SafeHtml>(() => {
        const rawText = this.rawMarkdown() || '';
        const rawHtml = marked.parse(rawText, { async: false }) as string;

        if (!isPlatformBrowser(this.platformId)) {
            return this.sanitizer.bypassSecurityTrustHtml(rawHtml);
        }

        const cleanHtml = DOMPurify.sanitize(rawHtml, {
            ADD_ATTR: ['target'],
        });

        return this.sanitizer.bypassSecurityTrustHtml(cleanHtml);
    });
}

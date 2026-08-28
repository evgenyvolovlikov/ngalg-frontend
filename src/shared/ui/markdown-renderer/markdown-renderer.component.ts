import { Component, computed, inject, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import DOMPurify from 'isomorphic-dompurify';
import { marked } from 'marked';

@Component({
    selector: 'app-markdown-renderer',
    standalone: true,
    template: `<div [innerHTML]="parsedContent()"></div>`,
})
export class MarkdownRendererComponent {
    readonly rawMarkdown = input.required<string>();
    private sanitizer = inject(DomSanitizer);

    parsedContent = computed<SafeHtml>(() => {
        const rawText = this.rawMarkdown();

        if (!rawText) {
            return '';
        }
        const rawHtml = marked.parse(rawText) as string;

        const cleanHtml = DOMPurify.sanitize(rawHtml);

        return this.sanitizer.bypassSecurityTrustHtml(cleanHtml);
    });
}

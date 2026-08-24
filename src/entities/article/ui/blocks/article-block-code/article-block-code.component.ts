import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button';

import { CodeBlockData } from '../../../model/article.types';

@Component({
    selector: 'app-article-block-code',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-block-code.component.html',
    styleUrl: './article-block-code.component.scss',
    imports: [ButtonComponent],
})
export class ArticleBlockCodeComponent {
    readonly data = input.required<CodeBlockData>();

    readonly isCopied = signal(false);

    private copyTimeout: ReturnType<typeof setTimeout> | null = null;

    async copyCode(): Promise<void> {
        try {
            await navigator.clipboard.writeText(this.data().code);
            this.isCopied.set(true);

            if (this.copyTimeout) {
                clearTimeout(this.copyTimeout);
            }

            this.copyTimeout = setTimeout(() => {
                this.isCopied.set(false);
            }, 2000);
        } catch (err) {
            console.error('Не удалось скопировать код:', err);
        }
    }
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CodeBlockData } from '../../model/article.types';

@Component({
    selector: 'app-article-block-code',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-block-code.component.html',
    styleUrl: './article-block-code.component.scss',
})
export class ArticleBlockCodeComponent {
    readonly data = input.required<CodeBlockData>();
}

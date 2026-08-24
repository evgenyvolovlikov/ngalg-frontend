import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Article } from '../../model/article.types';

@Component({
    selector: 'app-article-header',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-header.component.html',
    styleUrl: './article-header.component.scss',
})
export class ArticleHeaderComponent {
    readonly article = input.required<Article>();
}

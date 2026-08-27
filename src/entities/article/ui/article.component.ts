import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { Article } from '../model/article.types';

@Component({
    selector: 'app-article',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss',
})
export class ArticleComponent {
    readonly article = input.required<Article>();
}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ArticleComponent } from '@entities/article';
import { mockArticle } from '@entities/article/model/mocks/article.mock.data';

@Component({
    selector: 'app-article-detail-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'article-detail-page.component.html',
    styleUrl: 'article-detail-page.component.scss',
    imports: [ArticleComponent],
})
export class ArticleDetailPageComponent {
    protected readonly articles = mockArticle;
}

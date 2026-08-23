import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-article-detail-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'article-detail-page.component.html',
    styleUrl: 'article-detail-page.component.scss',
})
export class ArticleDetailPageComponent {}

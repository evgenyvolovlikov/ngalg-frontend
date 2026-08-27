import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-article-list-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-list-page.component.html',
})
export class ArticleListPageComponent {}

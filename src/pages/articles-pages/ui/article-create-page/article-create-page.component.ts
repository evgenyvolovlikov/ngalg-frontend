import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-article-create-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'article-create-page.component.html',
    styleUrl: 'article-create-page.component.scss',
})
export class ArticleCreatePageComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-article-update-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'article-update-page.component.html',
    styleUrl: 'article-update-page.component.scss',
})
export class ArticleUpdatePageComponent {}

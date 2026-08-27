import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-article-details-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-details-page.component.html',
    imports: [],
})
export class ArticleDetailsPageComponent {}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ArticleDetailsWidgetComponent } from '@widgets/article-details-widget';

@Component({
    selector: 'app-article-details-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-details-page.component.html',
    imports: [ArticleDetailsWidgetComponent],
})
export class ArticleDetailsPageComponent {
    readonly id = input.required<string>();
}

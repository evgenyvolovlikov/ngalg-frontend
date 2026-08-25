import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ArticleFormComponent } from '@features/article-form';

@Component({
    selector: 'app-article-update-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,

    templateUrl: 'article-update-page.component.html',

    imports: [ArticleFormComponent],
})
export class ArticleUpdatePageComponent {
    readonly category = input.required<string>();
    readonly slug = input.required<string>();
}

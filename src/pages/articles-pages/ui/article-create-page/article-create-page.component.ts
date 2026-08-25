import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ArticleFormComponent } from '@features/article-form';

@Component({
    selector: 'app-article-create-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'article-create-page.component.html',
    styleUrl: 'article-create-page.component.scss',
    imports: [ArticleFormComponent],
})
export class ArticleCreatePageComponent {}

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ArticleFormComponent } from '@features/article-form';

@Component({
    selector: 'app-article-editor-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-editor-page.component.html',
    imports: [ArticleFormComponent],
})
export class ArticleEditorPageComponent {}

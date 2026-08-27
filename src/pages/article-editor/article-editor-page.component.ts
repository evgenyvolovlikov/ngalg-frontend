import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-article-editor-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-editor-page.component.html',
})
export class ArticleEditorPageComponent {}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { MarkdownRendererComponent } from '@shared/ui/markdown-renderer/markdown-renderer.component';

import { ArticleBlockCodeComponent } from '../blocks/article-block-code/article-block-code.component';
import { ArticleBlockComplexityComponent } from '../blocks/article-block-complexity/article-block-complexity.component';
import { ArticleBlockFeaturesComponent } from '../blocks/article-block-features/article-block-features.component';
import { ArticleBlockImageComponent } from '../blocks/article-block-image/article-block-image.component';
import { ArticleBlockNoteComponent } from '../blocks/article-block-note/article-block-note.component';

@Component({
    selector: 'app-article-block-renderer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-block-renderer.component.html',
    styleUrl: './article-block-renderer.component.scss',
    imports: [
        MarkdownRendererComponent,
        ArticleBlockCodeComponent,
        ArticleBlockNoteComponent,
        ArticleBlockComplexityComponent,
        ArticleBlockImageComponent,
        ArticleBlockFeaturesComponent,
    ],
})
export class ArticleBlockRendererComponent {
    readonly block = input.required<any>();
}

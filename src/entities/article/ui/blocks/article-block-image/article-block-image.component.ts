import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CoverImageComponent } from '@shared/ui/cover-image';

import { ImageBlockData } from '../../../model/types/article.types';

@Component({
    selector: 'app-article-block-image',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-block-image.component.html',
    styleUrl: './article-block-image.component.scss',
    imports: [CoverImageComponent],
})
export class ArticleBlockImageComponent {
    readonly data = input.required<ImageBlockData>();
}

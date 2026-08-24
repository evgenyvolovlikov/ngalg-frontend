import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ComplexityBlockData } from '../../../model/article.types';

@Component({
    selector: 'app-article-block-complexity',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-block-complexity.component.html',
    styleUrl: './article-block-complexity.component.scss',
})
export class ArticleBlockComplexityComponent {
    readonly data = input.required<ComplexityBlockData>();
}

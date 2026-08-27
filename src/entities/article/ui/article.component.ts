import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CoverImageComponent } from '@shared/ui/cover-image';

import { Article } from '../model/article.types';

@Component({
    selector: 'app-article',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss',
    imports: [CoverImageComponent],
})
export class ArticleComponent {
    readonly article = input.required<Article>();
}

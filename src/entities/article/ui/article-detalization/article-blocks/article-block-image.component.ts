import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { CoverImageComponent } from '@shared/ui/cover-image';

import { ImageBlockData } from '../../../model/article.types';

@Component({
    selector: 'app-article-block-image',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CoverImageComponent],
    styles: [
        `
            .content-figure {
                display: flex;
                flex-direction: column;
                gap: var(--unit-2);
                margin: 0;
            }
            .caption {
                font-size: var(--font-size-sm);
                color: var(--text-muted);
                text-align: center;
            }
        `,
    ],
    template: `
        <figure class="content-figure">
            <app-cover-image [src]="data().url" [alt]="data().alt" [priority]="false" />
            @if (data().caption) {
                <figcaption class="caption">{{ data().caption }}</figcaption>
            }
        </figure>
    `,
})
export class ArticleBlockImageComponent {
    readonly data = input.required<ImageBlockData>();
}

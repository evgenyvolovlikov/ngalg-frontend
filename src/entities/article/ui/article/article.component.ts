import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';

import { BreadcrumbsComponent } from '@shared/ui/breadcrumbs';
import { ButtonComponent } from '@shared/ui/button';
import { CoverImageComponent } from '@shared/ui/cover-image/cover-image.component';

import { Article } from '../../model/article.types';
import { ArticleBlockRendererComponent } from '../article-block-renderer/article-block-renderer.component';
import { ArticleHeaderComponent } from '../article-header/article-header.component';

@Component({
    selector: 'app-article',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article.component.html',
    styleUrl: './article.component.scss',
    imports: [
        ButtonComponent,
        BreadcrumbsComponent,
        CoverImageComponent,
        ArticleHeaderComponent,
        ArticleBlockRendererComponent,
    ],
})
export class ArticleComponent {
    readonly article = input.required<Article>();

    readonly edit = output<string>();
    readonly delete = output<string>();

    readonly breadcrumbs = computed(() => [
        { label: 'Главная', url: '/' },
        { label: 'Статьи', url: '/articles' },
        { label: this.article().title, url: '' },
    ]);

    onDelete(): void {
        this.delete.emit(this.article().id);
    }

    onEdit(): void {
        this.edit.emit(this.article().id);
    }
}

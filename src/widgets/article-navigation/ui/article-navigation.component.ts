import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ArticleApiService } from '@entities/article';

import { AppRoutes } from '@shared/config';
import { AccordionComponent } from '@shared/ui/accordion/accordion.component';
import { AppLinkComponent } from '@shared/ui/app-link';
import { BadgeComponent } from '@shared/ui/badge';

@Component({
    selector: 'app-article-navigation',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, AppLinkComponent, BadgeComponent, AccordionComponent],
    templateUrl: './article-navigation.component.html',
    styleUrl: './article-navigation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleNavigationComponent {
    private readonly articleApi = inject(ArticleApiService);

    readonly navigationTree = toSignal(this.articleApi.getNavigationTree());
    readonly getArticleLink = AppRoutes.ARTICLE_DETAILS;
}

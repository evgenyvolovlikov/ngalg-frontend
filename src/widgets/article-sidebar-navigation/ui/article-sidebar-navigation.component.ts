import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { ArticleNavigationApiService } from '@entities/article-navigation';

import { RouteBuilder } from '@shared/config';
import { AccordionComponent } from '@shared/ui/accordion/accordion.component';
import { AppLinkComponent } from '@shared/ui/app-link';
import { BadgeComponent } from '@shared/ui/badge';

@Component({
    selector: 'app-article-sidebar-navigation',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, AppLinkComponent, BadgeComponent, AccordionComponent],
    templateUrl: './article-sidebar-navigation.component.html',
    styleUrl: './article-sidebar-navigation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleSidebarNavigationComponent {
    private readonly navigationApi = inject(ArticleNavigationApiService);

    readonly navigationTree = toSignal(this.navigationApi.getNavigationTree());

    constructor() {
        effect(() => {
            console.log(this.navigationTree());
        });
    }

    readonly getArticleLink = RouteBuilder.ARTICLE_DETAILS;
}

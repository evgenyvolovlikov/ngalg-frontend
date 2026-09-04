import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NavigationApiService } from '@entities/navigation';

import { RouteBuilder } from '@shared/config';
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
    private readonly navigationApi = inject(NavigationApiService);

    readonly navigationTree = toSignal(this.navigationApi.getNavigationTree());

    constructor() {
        effect(() => {
            console.log(this.navigationTree());
        });
    }

    readonly getArticleLink = RouteBuilder.ARTICLE_DETAILS;
}

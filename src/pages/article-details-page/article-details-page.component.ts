import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ArticleDetailsComponent } from '@widgets/article-details';
import { ArticleSidebarNavigationComponent } from '@widgets/article-sidebar-navigation';

import { SidebarLayoutComponent } from '@shared/layouts/sidebar-layout';

@Component({
    selector: 'app-article-details-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-details-page.component.html',
    imports: [ArticleDetailsComponent, ArticleSidebarNavigationComponent, SidebarLayoutComponent],
})
export class ArticleDetailsPageComponent {
    readonly id = input.required<string>();
}

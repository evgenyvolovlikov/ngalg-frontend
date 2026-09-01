import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ArticleDetailsComponent } from '@widgets/article-details';
import { ArticleNavigationComponent } from '@widgets/article-navigation';
import { SidebarLayoutComponent } from '@widgets/sidebar-layout';

@Component({
    selector: 'app-article-details-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-details-page.component.html',
    styleUrl: './article-details-page.component.scss',
    imports: [ArticleDetailsComponent, ArticleNavigationComponent, SidebarLayoutComponent],
})
export class ArticleDetailsPageComponent {
    readonly id = input.required<string>();
}

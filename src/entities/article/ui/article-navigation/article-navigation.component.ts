import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { NavigationComponent } from '@shared/ui/navigation';

import { ARTICLES_NAVIGATION_ELEMENTS } from '../../model/mocks/article-navigation.mock.data';

@Component({
    selector: 'app-article-navigation',
    standalone: true,
    templateUrl: 'article-navigation.component.html',
    styleUrl: './article-navigation.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NavigationComponent],
})
export class ArticleNavigationComponent {
    protected readonly sections = signal(ARTICLES_NAVIGATION_ELEMENTS);
}

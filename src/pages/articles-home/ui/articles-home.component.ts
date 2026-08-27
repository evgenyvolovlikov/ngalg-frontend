import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-articles-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'articles-home.component.html',
})
export class ArticleHomeComponent {}

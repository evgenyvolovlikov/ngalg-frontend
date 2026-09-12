import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-articles-home-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    templateUrl: './articles-home-page.component.html',
    imports: [],
})
export class ArticlesHomePageComponent {}

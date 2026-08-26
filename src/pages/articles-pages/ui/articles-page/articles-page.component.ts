import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-articles-page',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './articles-page.component.html',
    imports: [],
})
export class ArticlesPageComponent {}

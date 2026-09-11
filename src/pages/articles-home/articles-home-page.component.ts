import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SplitPaneComponent } from '@shared/ui/splte-pane';

@Component({
    selector: 'app-articles-home-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    templateUrl: './articles-home-page.component.html',
    imports: [SplitPaneComponent],
})
export class ArticlesHomePageComponent {}

import { Component, signal } from '@angular/core';

import { HeaderComponent } from '@widgets/header';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    protected readonly title = signal('client');
}

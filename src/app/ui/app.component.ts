import { Component, signal } from '@angular/core';

import { SidebarLayoutComponent } from '@shared/sidebar-layout';

@Component({
    selector: 'app-root',
    imports: [SidebarLayoutComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    protected readonly title = signal('client');
}

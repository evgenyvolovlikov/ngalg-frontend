import { Component, signal } from '@angular/core';

import { SidebarLayoutComponent } from '@shared/sidebar-layout';
import { LinkComponent } from '@shared/ui/link/link.component';

@Component({
    selector: 'app-root',
    imports: [SidebarLayoutComponent, LinkComponent],
    templateUrl: './app.component.html',
})
export class AppComponent {
    protected readonly title = signal('client');
}

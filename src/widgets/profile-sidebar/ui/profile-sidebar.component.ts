import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LinkComponent } from '@shared/ui/link';

import { PROFILE_NAV_LINKS } from '../model/profile-sidebar-nav-config';

@Component({
    selector: 'app-profile-sidebar',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: 'profile-sidebar.component.html',
    styleUrl: 'profile-sidebar.component.scss',
    imports: [LinkComponent],
})
export class ProfileSidebarComponent {
    protected readonly menuElements = PROFILE_NAV_LINKS;
}

import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LinkComponent } from '@shared/ui/link';

@Component({
    selector: 'app-auth-layout',
    standalone: true,
    imports: [LinkComponent, RouterOutlet],
    templateUrl: './auth-layout.component.html',
    styleUrl: './auth-layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {
    readonly brandName = input<string>('ngalg');
}

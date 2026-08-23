import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { LinkComponent } from '@shared/ui/link';

@Component({
    selector: 'app-auth-layout',
    standalone: true,
    imports: [LinkComponent],
    templateUrl: './auth-layout.component.html',
    styleUrl: './auth-layout.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthLayoutComponent {
    readonly brandName = input<string>('ngalg');
}

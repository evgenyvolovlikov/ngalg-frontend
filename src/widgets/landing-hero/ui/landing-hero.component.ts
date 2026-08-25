import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

// Предполагаемые пути до твоих shared UI компонентов
import { ButtonComponent } from '@shared/ui/button';

@Component({
    selector: 'app-landing-hero',
    standalone: true,
    imports: [ButtonComponent, RouterLink],
    templateUrl: './landing-hero.component.html',
    styleUrl: './landing-hero.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingHeroComponent {}

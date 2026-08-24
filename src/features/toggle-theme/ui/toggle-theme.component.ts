import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';

import { ButtonComponent } from '@shared/ui/button';

import { ThemeService } from '../model/toggle-theme.service';

@Component({
    selector: 'app-toggle-theme',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './toggle-theme.component.html',
    styleUrl: './toggle-theme.component.scss',
    imports: [ButtonComponent],
})
export class ToggleThemeComponent {
    private readonly themeService = inject(ThemeService);

    protected readonly isDark = computed(() => this.themeService.currentTheme() === 'dark');

    protected readonly iconPath = computed(() =>
        this.isDark() ? '/assets/theme-light.svg' : '/assets/theme-dark.svg',
    );

    protected readonly ariaLabel = computed(() =>
        this.isDark() ? 'Переключить на светлую тему' : 'Переключить на тёмную тему',
    );

    protected onToggle(): void {
        this.themeService.toggleTheme();
    }
}

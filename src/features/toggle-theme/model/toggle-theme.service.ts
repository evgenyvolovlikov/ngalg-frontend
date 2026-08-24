import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, effect, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private readonly THEME_KEY = 'theme';
    private readonly document = inject(DOCUMENT);
    private readonly platformId = inject(PLATFORM_ID);
    private readonly isBrowser = isPlatformBrowser(this.platformId);

    private readonly themeSignal = signal<ThemeMode>(this.getInitialTheme());

    readonly currentTheme = this.themeSignal.asReadonly();

    constructor() {
        effect(() => {
            const theme = this.currentTheme();

            if (this.isBrowser) {
                this.document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem(this.THEME_KEY, theme);
            }
        });
    }

    toggleTheme(): void {
        this.themeSignal.update((theme) => (theme === 'light' ? 'dark' : 'light'));
    }

    setTheme(theme: ThemeMode): void {
        this.themeSignal.set(theme);
    }

    private getInitialTheme(): ThemeMode {
        if (!this.isBrowser) {
            return 'dark'; // Дефолтное значение для SSR
        }

        const savedTheme = localStorage.getItem(this.THEME_KEY) as ThemeMode;

        if (savedTheme === 'light' || savedTheme === 'dark') {
            return savedTheme;
        }

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
}

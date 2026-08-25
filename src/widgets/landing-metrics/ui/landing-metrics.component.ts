import { ChangeDetectionStrategy, Component } from '@angular/core';

interface MetricItem {
    value: string;
    label: string;
}

@Component({
    selector: 'app-landing-metrics',
    standalone: true,
    templateUrl: './landing-metrics.component.html',
    styleUrl: './landing-metrics.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingMetricsComponent {
    protected readonly metrics: MetricItem[] = [
        { value: '12+', label: 'Инженерных треков' },
        { value: 'v21/22', label: 'Поддержка Angular' },
        { value: '100%', label: 'Реальный контекст' },
        { value: '24/7', label: 'AI-ревью кода' },
    ];

    protected readonly techStack: string[] = [
        'Angular',
        'Signals',
        'RxJS',
        'TypeScript',
        'SCSS',
        'FSD',
    ];
}

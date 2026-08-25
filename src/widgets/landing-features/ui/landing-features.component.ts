import { ChangeDetectionStrategy, Component } from '@angular/core';

interface FeatureItem {
    id: string;
    title: string;
    description: string;
    iconText: string;
}

@Component({
    selector: 'app-landing-features',
    standalone: true,
    templateUrl: './landing-features.component.html',
    styleUrl: './landing-features.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingFeaturesComponent {
    protected readonly features: FeatureItem[] = [
        {
            id: 'tracks',
            title: 'Инженерные треки',
            description:
                'Каталог задач, спроектированный под Angular. Разбираем работу с DI, мемоизацию, кастомные пайпы, управление стейтом через Signals и RxJS.',
            iconText: '[ TRK ]',
        },
        {
            id: 'ai-review',
            title: 'AI-Интервьюер',
            description:
                'Автоматический анализ временной и пространственной сложности O(N). Ревью паттернов проектирования, поиск утечек памяти и узких мест.',
            iconText: '[ AI ]',
        },
        {
            id: 'pow',
            title: 'Proof of Work',
            description:
                'Каждое решенное задание превращается в рабочий модуль. Экспортируй ZIP-архив или настраивай CI/CD для прямой отправки коммитов в свой GitHub.',
            iconText: '[ POW ]',
        },
        {
            id: 'audit',
            title: 'Аудит компетенций',
            description:
                'Рассчитываем индекс готовности к собеседованиям. Платформа оценивает твой текущий грейд (от Junior до Senior) на основе истории решений.',
            iconText: '[ AUD ]',
        },
    ];
}

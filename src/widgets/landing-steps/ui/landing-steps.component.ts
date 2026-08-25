import { ChangeDetectionStrategy, Component } from '@angular/core';

interface StepItem {
    num: string;
    title: string;
    description: string;
    command: string;
}

@Component({
    selector: 'app-landing-steps',
    standalone: true,
    templateUrl: './landing-steps.component.html',
    styleUrl: './landing-steps.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingStepsComponent {
    protected readonly steps: StepItem[] = [
        {
            num: '01',
            title: 'Инициализация трека',
            description:
                'Выбираешь задачу, релевантную твоему грейду (от настройки роутинга до кастомных декораторов и мемоизации).',
            command: '$ ngalg init track --level=senior',
        },
        {
            num: '02',
            title: 'Разработка решения',
            description:
                'Пишешь код в изоляции. Используешь Angular 22, Signals, RxJS. Система прогоняет локальные тесты на каждое изменение.',
            command: '$ ngalg serve --watch',
        },
        {
            num: '03',
            title: 'AI Code Review',
            description:
                'Отправляешь модуль на ревью. Нейросеть оценивает архитектуру, Big O и дает жесткий фидбек по узким местам.',
            command: '$ ngalg review --strict',
        },
        {
            num: '04',
            title: 'Экспорт Proof of Work',
            description:
                'Одобренное решение автоматически деплоится в твой GitHub-репозиторий как доказательство твоих навыков для работодателя.',
            command: '$ ngalg export --target=github',
        },
    ];
}

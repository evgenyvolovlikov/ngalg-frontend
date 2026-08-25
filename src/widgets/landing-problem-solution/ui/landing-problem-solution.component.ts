import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ComparisonPoint {
    problem: string;
    solution: string;
}

@Component({
    selector: 'app-landing-problem-solution',
    standalone: true,
    templateUrl: './landing-problem-solution.component.html',
    styleUrl: './landing-problem-solution.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingProblemSolutionComponent {
    protected readonly comparisonPoints: ComparisonPoint[] = [
        {
            problem: 'Абстрактные задачи на бинарные деревья, оторванные от фронтенда.',
            solution: 'Реальные Angular-кейсы: DI Tree, Custom RxJS Operators, Signal State.',
        },
        {
            problem: 'Код сгорает в песочнице и не показывает твой уровень интервьерам.',
            solution: 'Генерация Proof of Work: экспортируемые модули и коммиты в GitHub.',
        },
        {
            problem: 'Сухая проверка тестами без разбора архитектуры и чистокровного кода.',
            solution:
                'Глубокий AI-аудит: анализ сложности O(N), памяти и паттернов проектирования.',
        },
    ];
}

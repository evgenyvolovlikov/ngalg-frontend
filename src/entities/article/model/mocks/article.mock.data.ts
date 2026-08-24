import { Article } from '../types/article.types';

export const mockArticle: Article = {
    id: 'art-789abc12-3456-7890-abcd-ef1234567890',
    slug: 'angular-standalone-components-deep-dive',
    status: 'PUBLISHED',
    level: 'INTERMEDIATE',
    readingTimeMinutes: 7,

    coverImage: {
        url: 'https://avatars.mds.yandex.net/i?id=938ac4ce02f260e0456b9c05f4337165_l-10415168-images-thumbs&n=13',
        alt: 'Сравнение: NgModule vs Standalone',
        caption: 'Архитектура NgAlg: модули, фичи и доменные сущности',
    },

    title: 'Standalone компоненты в Angular: архитектура и лучшие практики',
    leadText:
        'Разбираем, как правильно использовать standalone-компоненты в FSD-архитектуре и не раздувать бандлы.',
    description:
        'Практическое руководство по standalone-компонентам: примеры, ошибки, tree-shaking, интеграция с формами и роутингом.',

    seo: {
        description:
            'Как применять standalone-компоненты в Angular-проектах: примеры кода, архитектура, производительность, типизация.',
        keywords: ['Angular', 'standalone', 'FSD', 'архитектура', 'производительность'],
    },

    categoryId: 'frontend',
    tags: ['COMPONENT', 'ARCHITECTURE', 'EXAMPLE'],

    blocks: [
        {
            type: 'TEXT',
            data: {
                content:
                    '#### Standalone-компоненты — стандарт современного Angular\n\nОни позволяют объявлять зависимости прямо в декораторе компонента без использования `NgModule`.\n\nВ FSD-архитектуре это дает четкую изоляцию: слои (`shared`, `features`, `widgets`) содержат самодостаточные компоненты с предсказуемым графом зависимостей.',
                format: 'MARKDOWN',
            },
        },
        {
            type: 'NOTE',
            data: {
                text: 'Начиная с Angular 19 standalone-режим включен по умолчанию. Явно указывать standalone: true в декораторе больше не требуется.',
                noteType: 'INFO',
            },
        },
        {
            type: 'CODE',
            data: {
                code: `@Component({
  selector: 'app-ui-card',
  template: \`
    <div class="card">
      <h3>{{ title() }}</h3>
      @if (showDescription()) {
        <p>{{ description() }}</p>
      }
    </div>
  \`,
})
export class UiCardComponent {
  readonly title = input.required<string>();
  readonly showDescription = signal(true);
  readonly description = signal('Пример современного компонента на Signals');
}`,
                language: 'typescript',
                filename: 'ui-card.component.ts',
            },
        },
        {
            type: 'COMPLEXITY',
            data: {
                time: 'O(1)',
                space: 'O(1)',
                description:
                    'Tree-shaking исключает неиспользуемые директивы и пайпы из итогового бандла на этапе сборки.',
            },
        },
        {
            type: 'IMAGE',
            data: {
                url: 'https://avatars.mds.yandex.net/i?id=938ac4ce02f260e0456b9c05f4337165_l-10415168-images-thumbs&n=13',
                alt: 'Структура компонентов',
                caption: 'Рис. 1. Визуальное сравнение структуры модулей и standalone-компонентов.',
            },
        },
        {
            type: 'FEATURES',
            data: {
                sectionTitle: 'Ключевые преимущества для NgAlg',
                items: [
                    {
                        title: 'Явные зависимости',
                        text: 'Каждый компонент сам объявляет необходимые импорты — это упрощает tree-shaking и контроль размера бандла.',
                    },
                    {
                        title: 'Ленивая загрузка',
                        text: 'Возможность загружать отдельные компоненты через loadComponent без создания промежуточных модулей.',
                    },
                    {
                        title: 'Чистый кодовая база',
                        text: 'Полный отказ от NgModules снижает количество boilerplate-кода в FSD-слоях.',
                    },
                ],
            },
        },
    ],

    problemId: 'prob-ngalg-standalone-migration',
    authorId: 'user-12345',

    createdAt: '2026-06-15T10:30:00Z',
    updatedAt: '2026-06-20T14:45:00Z',
};

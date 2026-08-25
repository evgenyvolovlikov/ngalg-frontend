import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

interface FaqItem {
    id: string;
    question: string;
    answer: string;
}

@Component({
    selector: 'app-landing-faq',
    standalone: true,
    templateUrl: './landing-faq.component.html',
    styleUrl: './landing-faq.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingFaqComponent {
    protected readonly openId = signal<string | null>('grades'); // По умолчанию открыт первый вопрос

    protected readonly faqList: FaqItem[] = [
        {
            id: 'grades',
            question: 'Для каких грейдов подходит платформа?',
            answer: 'Задачи разбиты по сложностям — от Middle до Senior+. Треки охватывают внутреннее устройство DI, Signals state management, RxJS, кастомные декораторы и оптимизацию Change Detection.',
        },
        {
            id: 'github',
            question: 'Как решения синхронизируются с GitHub?',
            answer: 'После успешного прохождения авто-тестов и AI-ревью платформа коммитит готовый изолированный модуль с вашим решением в привязанный GitHub-репозиторий.',
        },
        {
            id: 'versions',
            question: 'Какие версии Angular и TypeScript используются?',
            answer: 'Платформа работает на актуальном стеке: Angular 22, TypeScript 5+, RxJS 7+. Все задачи спроектированы с учетом современных паттернов (standalone components, signal-based inputs/outputs).',
        },
        {
            id: 'refund',
            question: 'Можно ли отменить подписку в любой момент?',
            answer: 'Да, подписка отменяется в один клик в личном кабинете. Доступ к тарифу Senior Pass сохранится до конца оплаченного периода.',
        },
    ];

    protected toggle(id: string): void {
        this.openId.update((current) => (current === id ? null : id));
    }
}

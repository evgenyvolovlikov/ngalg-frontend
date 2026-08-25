import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ButtonComponent } from '@shared/ui/button';

interface PlanFeature {
    text: string;
    included: boolean;
}

interface PricingPlan {
    id: string;
    title: string;
    badge?: string;
    price: string;
    period: string;
    description: string;
    features: PlanFeature[];
    buttonText: string;
    buttonVariant: 'primary' | 'secondary';
    isFeatured?: boolean;
}

@Component({
    selector: 'app-landing-pricing',
    standalone: true,
    imports: [ButtonComponent, RouterLink],
    templateUrl: './landing-pricing.component.html',
    styleUrl: './landing-pricing.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPricingComponent {
    protected readonly plans: PricingPlan[] = [
        {
            id: 'free',
            title: 'Free Plan',
            price: '0 ₽',
            period: 'навсегда',
            description: 'Для знакомства с базовыми алгоритмическими треками.',
            features: [
                { text: 'Доступ к 3 базовым трекам', included: true },
                { text: 'Проверка локальными тестами', included: true },
                { text: 'AI-аудит (3 разбора в месяц)', included: true },
                { text: 'Автоматический экспорт в GitHub', included: false },
                { text: 'Инженерный сертификат Proof of Work', included: false },
            ],
            buttonText: 'Начать бесплатно',
            buttonVariant: 'secondary',
        },
        {
            id: 'premium',
            title: 'Senior Pass',
            badge: 'RECOMMENDED',
            price: '1 990 ₽',
            period: 'в месяц',
            description: 'Полный инструментарий для прокачки и прохождения собеседований.',
            features: [
                { text: 'Безлимитный доступ ко всем трекам', included: true },
                { text: 'Проверка архитектуры (Angular 22 / Signals)', included: true },
                { text: 'Неограниченный AI-интервьюер O(N)', included: true },
                { text: 'Авто-деплой и синхронизация с GitHub', included: true },
                { text: 'Подтвержденное портфолио Proof of Work', included: true },
            ],
            buttonText: 'Оформить подписку',
            buttonVariant: 'primary',
            isFeatured: true,
        },
    ];
}

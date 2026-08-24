import { NavigationSection } from '../types/article-navigation.types';

export const ARTICLES_NAVIGATION_ELEMENTS: NavigationSection[] = [
    {
        id: 'sec_01',
        title: 'Ядро и Реактивность',
        items: [
            {
                id: 'item_01',
                label: 'Компоненты и Директивы',
                route: '/articles/angular/components',
                children: [
                    {
                        id: 'art_101',
                        label: 'Жизненный цикл (Lifecycle Hooks)',
                        route: '/articles/angular/lifecycle',
                        tag: 'THEORY',
                    },
                    {
                        id: 'art_102',
                        label: 'Новый Control Flow (@if, @for, @switch)',
                        route: '/articles/angular/control-flow',
                        tag: 'EXAMPLE',
                    },
                ],
            },
            {
                id: 'item_02',
                label: 'Реактивность',
                route: '/articles/angular/reactivity',
                children: [
                    {
                        id: 'art_201',
                        label: 'Введение в Signals',
                        route: '/articles/angular/signals',
                        tag: 'THEORY',
                    },
                    {
                        id: 'art_202',
                        label: 'Интероперабельность RxJS и Signals',
                        route: '/articles/angular/rxjs-interop',
                        tag: 'COMPONENT',
                    },
                ],
            },
        ],
    },
    {
        id: 'sec_02',
        title: 'Архитектура',
        items: [
            {
                id: 'item_03',
                label: 'Feature-Sliced Design (FSD)',
                route: '/articles/architecture/fsd',
                children: [
                    {
                        id: 'art_301',
                        label: 'Слои, слайсы и сегменты',
                        route: '/articles/architecture/fsd/layers',
                        tag: 'THEORY',
                    },
                    {
                        id: 'art_302',
                        label: 'Изоляция фичей в Angular',
                        route: '/articles/architecture/fsd/angular-features',
                        tag: 'EXAMPLE',
                    },
                ],
            },
        ],
    },
    {
        id: 'sec_03',
        title: 'Алгоритмы и Паттерны',
        items: [
            {
                id: 'item_05',
                label: 'Массивы и Указатели',
                route: '/articles/algorithms/arrays',
                children: [
                    {
                        id: 'art_501',
                        label: 'Паттерн: Два указателя',
                        route: '/articles/algorithms/two-pointers',
                        tag: 'EXAMPLE',
                    },
                    {
                        id: 'art_502',
                        label: 'Паттерн: Скользящее окно',
                        route: '/articles/algorithms/sliding-window',
                        tag: 'EXAMPLE',
                    },
                ],
            },
        ],
    },
];

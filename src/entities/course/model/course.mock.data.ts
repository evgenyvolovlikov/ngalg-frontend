import { Lesson } from '@entities/lesson';

export const MOCK_COURSE_STATS = {
    total: 9,
    watched: 0,
};

export const MOCK_LESSONS: Lesson[] = [
    {
        id: '1',
        slug: 'introduction',
        title: '1 - Introduction',
        description:
            'HTML might not be the most exciting topic in computer science, but it lies at the heart of web development and is requisite knowledge for any frontend engineer.',
        durationMin: 3,
        isFree: true,
        isLocked: false,
        isWatched: false,
        // Тестовое видео (Big Buck Bunny) для проверки плеера
        videoUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
    {
        id: '2',
        slug: 'html-basics',
        title: '2 - HTML Basics',
        durationMin: 5,
        isFree: false,
        isLocked: true,
        isWatched: false,
        videoUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
        id: '3',
        slug: 'semantic-html',
        title: '3 - Semantic HTML',
        durationMin: 8,
        isFree: false,
        isLocked: true,
        isWatched: false,
        videoUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
        id: '4',
        slug: 'essential-html-tags',
        title: '4 - Essential HTML Tags',
        durationMin: 12,
        isFree: false,
        isLocked: true,
        isWatched: false,
        videoUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
        id: '5',
        slug: 'tables',
        title: '5 - Tables',
        // На макете этот урок помечен как FREE
        durationMin: 6,
        isFree: true,
        isLocked: false,
        isWatched: false,
        videoUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
        id: '6',
        slug: 'forms',
        title: '6 - Forms',
        durationMin: 15,
        isFree: false,
        isLocked: true,
        isWatched: false,
        videoUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
        id: '7',
        slug: 'document-object-model',
        title: '7 - Document Object Model',
        durationMin: 10,
        isFree: false,
        isLocked: true,
        isWatched: false,
        videoUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
        id: '8',
        slug: 'accessibility',
        title: '8 - Accessibility',
        durationMin: 7,
        isFree: false,
        isLocked: true,
        isWatched: false,
        videoUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
    {
        id: '9',
        slug: 'meta-tags',
        title: '9 - Meta Tags',
        durationMin: 4,
        isFree: false,
        isLocked: true,
        isWatched: false,
        videoUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    },
];

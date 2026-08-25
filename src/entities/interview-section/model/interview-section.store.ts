import { Injectable, signal } from '@angular/core';

import { InterviewSection } from './interview-section.types';

@Injectable({
    providedIn: 'root',
})
export class InterviewSectionStore {
    private readonly sectionsSignal = signal<InterviewSection[]>([
        {
            id: 'two-pointers-1',
            title: 'SECTION 01 // TWO POINTERS',
            coreConcept: 'Virtual Window Slicer',
            integrationType: '60FPS VirtualScroll',
            progress: 100,
            isLocked: false,
        },
        {
            id: 'sliding-window-1',
            title: 'SECTION 02 // SLIDING WINDOW',
            coreConcept: 'Optimized Rate Limiter',
            integrationType: 'In-Memory Cache',
            progress: 0,
            isLocked: true,
        },
        {
            id: 'two-pointers-2',
            title: 'SECTION 03 // TWO POINTERS',
            coreConcept: 'Virtual Window Slicer',
            integrationType: '60FPS VirtualScroll',
            progress: 100,
            isLocked: false,
        },
        {
            id: 'sliding-window-2',
            title: 'SECTION 04 // SLIDING WINDOW',
            coreConcept: 'Optimized Rate Limiter',
            integrationType: 'In-Memory Cache',
            progress: 0,
            isLocked: true,
        },
    ]);

    readonly sections = this.sectionsSignal.asReadonly();
}

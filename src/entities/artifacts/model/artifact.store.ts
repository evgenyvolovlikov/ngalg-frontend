import { Injectable, computed, signal } from '@angular/core';

import { Artifact } from './artifact.model';

@Injectable({
    providedIn: 'root',
})
export class ArtifactStore {
    public readonly artifacts = signal<Artifact[]>([
        {
            id: 'art-1',
            algorithmName: 'Two Pointers',
            integrationName: 'Virtual Scroll',
            isCompiled: true,
        },
        {
            id: 'art-2',
            algorithmName: 'Sliding Window',
            integrationName: 'Rate Limiter',
            isCompiled: true,
        },
        {
            id: 'art-3',
            algorithmName: 'Graphs',
            integrationName: 'DI Tree Resolver',
            isCompiled: true,
        },
    ]);

    public readonly availableForCompilation = signal<number>(5);

    public readonly readinessPercentage = computed(() => {
        const currentArtifacts = this.artifacts();
        const totalScope = currentArtifacts.length + this.availableForCompilation();

        if (totalScope === 0) return 0;

        const compiledCount = currentArtifacts.filter((a) => a.isCompiled).length;
        return Math.round((compiledCount / totalScope) * 100);
    });

    public toggleCompileStatus(id: string): void {
        this.artifacts.update((items) =>
            items.map((item) =>
                item.id === id ? { ...item, isCompiled: !item.isCompiled } : item,
            ),
        );
    }
}

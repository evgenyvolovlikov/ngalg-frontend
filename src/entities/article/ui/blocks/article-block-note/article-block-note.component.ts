import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { NoteBlockData } from '../../../model/article.types';

@Component({
    selector: 'app-article-block-note',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-block-note.component.html',
    styleUrl: './article-block-note.component.scss',
})
export class ArticleBlockNoteComponent {
    readonly data = input.required<NoteBlockData>();

    readonly icon = computed(() => {
        switch (this.data().noteType) {
            case 'WARNING':
                return '⚠️';
            case 'ERROR':
                return '🚨';
            case 'INFO':
            default:
                return '💡';
        }
    });
}

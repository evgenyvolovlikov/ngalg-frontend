import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

import { Lesson, LessonHeaderComponent } from '@entities/lesson';
import { FeedbackModalComponent } from '@features/course-feedback';
import { MarkWatchedCheckboxComponent } from '@features/mark-watched-checkbox';

import { VideoPlayerComponent } from '@shared/ui/video-player';

@Component({
    selector: 'app-lesson-workspace',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './lesson-workspace.component.html',
    styleUrl: './lesson-workspace.component.scss',
    imports: [
        LessonHeaderComponent,
        VideoPlayerComponent,
        FeedbackModalComponent,
        MarkWatchedCheckboxComponent,
    ],
})
export class LessonWorkspaceComponent {
    readonly lesson = input.required<Lesson>();

    readonly toggleWatched = output<boolean>();

    protected onToggleWatched(event: { id: string; watched: boolean }): void {
        this.toggleWatched.emit(event.watched);
    }
}

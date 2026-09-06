import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    OnInit,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormArray, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { finalize } from 'rxjs';

import {
    ArticleApiService,
    ArticleFormComponent,
    CreateArticleDto,
    UpdateArticleDto,
    createInitialArticleForm,
    populateArticleBlocks,
} from '@entities/article';
import { ArticleNavigationApiService } from '@entities/article-navigation';

@Component({
    selector: 'app-manage-article',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ReactiveFormsModule, ArticleFormComponent],
    template: `
        <app-article-form
            [form]="articleForm"
            [isEditMode]="isEditMode()"
            [isSubmitting]="isSubmitting()"
            [navigationTree]="navigationTree()"
            (save)="handleSave()"
            (cancel)="handleCancel()"
        />
    `,
})
export class ManageArticleComponent implements OnInit {
    readonly articleId = input<string | null>(null);

    protected readonly isSubmitting = signal<boolean>(false);

    private readonly fb = inject(NonNullableFormBuilder);
    private readonly router = inject(Router);
    private readonly articleApi = inject(ArticleApiService);
    private readonly navigationApi = inject(ArticleNavigationApiService);
    private readonly destroyRef = inject(DestroyRef);

    protected readonly articleForm = createInitialArticleForm(this.fb);

    protected readonly navigationTree = toSignal(this.navigationApi.navigationTree$, {
        initialValue: [],
    });

    readonly isEditMode = computed(() => !!this.articleId());

    ngOnInit(): void {
        const id = this.articleId();
        if (id) {
            this.articleApi
                .getArticleById(id)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe({
                    next: (article) => {
                        this.articleForm.patchValue(article);
                        const blocksFormArray = this.articleForm.controls.blocks as FormArray;
                        populateArticleBlocks(this.fb, blocksFormArray, article.blocks);
                    },
                    error: (err) =>
                        console.error('Не удалось загрузить статью для редактирования', err),
                });
        }
    }

    protected handleCancel(): void {
        const id = this.articleId();
        this.router.navigate(id ? ['/articles', id] : ['/articles']);
    }

    protected handleSave(): void {
        if (this.articleForm.invalid) return;

        const formData = this.articleForm.getRawValue();
        const id = this.articleId();
        const currentUserId = '62bb502e-c5e7-48f8-b3d4-b903fbf7cb0d';

        const basePayload = {
            ...formData,
            authorId: currentUserId,
        };

        this.isSubmitting.set(true);

        const request$ = this.isEditMode()
            ? this.articleApi.updateArticle(id!, basePayload as UpdateArticleDto)
            : this.articleApi.createArticle(basePayload as CreateArticleDto);

        request$
            .pipe(
                finalize(() => this.isSubmitting.set(false)),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe({
                next: (savedArticle) => {
                    const targetId = savedArticle.id || savedArticle.slug;
                    this.router.navigate(['/articles', targetId]);
                },
                error: (err) => console.error('Ошибка при сохранении статьи', err),
            });
    }
}

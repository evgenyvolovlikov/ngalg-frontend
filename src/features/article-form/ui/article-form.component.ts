import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input, output } from '@angular/core';
import {
    FormArray,
    FormGroup,
    NonNullableFormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import { ArticleBlockType, ArticleLevel, ArticleStatus, ArticleTag } from '@entities/article';

import { ButtonComponent } from '@shared/ui/button';
import { InputComponent } from '@shared/ui/input';
import { SelectComponent } from '@shared/ui/select';
import { TagsInputComponent } from '@shared/ui/tags-input';
import { TextareaComponent } from '@shared/ui/textarea';

import { createBlockGroup } from '../model/article-form.factory';
import { ArticleFormModel, BlockFormGroup } from '../model/article-form.types';
import { ArticleBlockFormRendererComponent } from './article-block-form-renderer.component';

export const BLOCK_TYPES: Record<ArticleBlockType, ArticleBlockType> = {
    TEXT: 'TEXT',
    NOTE: 'NOTE',
    CODE: 'CODE',
    IMAGE: 'IMAGE',
    COMPLEXITY: 'COMPLEXITY',
    FEATURES: 'FEATURES',
};

@Component({
    selector: 'app-article-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-form.component.html',
    styleUrl: './article-form.component.scss',
    imports: [
        ReactiveFormsModule,
        RouterLink,
        ButtonComponent,
        InputComponent,
        UpperCasePipe,
        TextareaComponent,
        SelectComponent,
        TagsInputComponent,
        ArticleBlockFormRendererComponent,
    ],
})
export class ArticleFormComponent {
    readonly articleId = input<string | null>(null);
    readonly slug = input<string | undefined>();
    readonly isSubmitting = input<boolean>(false);

    readonly save = output<
        ReturnType<typeof this.articleForm.getRawValue> & { id?: string | null }
    >();

    readonly isEditMode = computed(() => !!this.articleId() || !!this.slug());

    protected readonly blockTypes = BLOCK_TYPES;
    private readonly fb = inject(NonNullableFormBuilder);

    protected readonly articleForm = this.fb.group<ArticleFormModel>({
        problemId: this.fb.control<string | null>(null),
        readingTimeMinutes: this.fb.control(0, [Validators.min(0)]),

        title: this.fb.control('', [Validators.required]),
        slug: this.fb.control<string | null>(null),
        categoryId: this.fb.control('', [Validators.required]),

        status: this.fb.control<ArticleStatus>('PUBLISHED', [Validators.required]),
        level: this.fb.control<ArticleLevel>('BEGINNER', [Validators.required]),

        leadText: this.fb.control('', [Validators.required]),
        description: this.fb.control('', [Validators.required]),

        coverImage: this.fb.group({
            url: this.fb.control('', [Validators.required]),
            alt: this.fb.control('', [Validators.required]),
            caption: this.fb.control<string | null>(null),
        }),

        tags: this.fb.control<ArticleTag[]>([]),

        seo: this.fb.group({
            description: this.fb.control<string | null>(null),
            keywords: this.fb.control<string[]>([]),
        }),

        blocks: this.fb.array<FormGroup<BlockFormGroup>>([]),
    });

    readonly categoryOptions = [
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' },
        { value: 'algorithms', label: 'Алгоритмы' },
    ];

    readonly statusOptions = [
        { value: 'DRAFT', label: 'Черновик' },
        { value: 'PUBLISHED', label: 'Опубликовано' },
        { value: 'ARCHIVED', label: 'В архиве' },
    ];

    readonly levelOptions = [
        { value: 'BEGINNER', label: 'Beginner' },
        { value: 'INTERMEDIATE', label: 'Intermediate' },
        { value: 'ADVANCED', label: 'Advanced' },
    ];

    readonly availableBlocks: { type: ArticleBlockType; label: string }[] = [
        { type: 'TEXT', label: 'Текст' },
        { type: 'CODE', label: 'Код' },
        { type: 'NOTE', label: 'Заметка' },
        { type: 'COMPLEXITY', label: 'Сложность' },
        { type: 'IMAGE', label: 'Картинка' },
        { type: 'FEATURES', label: 'Фичи' },
    ];

    protected get blocksFormArray(): FormArray<FormGroup<BlockFormGroup>> {
        return this.articleForm.controls.blocks;
    }

    protected addBlock(type: ArticleBlockType): void {
        this.blocksFormArray.push(createBlockGroup(this.fb, type));
    }

    protected removeBlock(index: number): void {
        this.blocksFormArray.removeAt(index);
    }

    protected onSubmit(): void {
        if (this.articleForm.invalid) {
            this.articleForm.markAllAsTouched();
            return;
        }

        const formData = this.articleForm.getRawValue();
        const payload = this.isEditMode() ? { id: this.articleId(), ...formData } : formData;

        this.save.emit(payload);
    }
}

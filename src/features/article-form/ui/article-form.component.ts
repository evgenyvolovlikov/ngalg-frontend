/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-case-declarations */
import { UpperCasePipe } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import {
    FormArray,
    FormControl,
    FormGroup,
    NonNullableFormBuilder,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

import {
    Article,
    ArticleBlockType,
    ArticleLevel,
    ArticleStatus,
    ArticleTag,
    NoteType,
    TextFormat,
} from '@entities/article';
import { mockArticle } from '@entities/article/model/mocks/article.mock.data';

import { ButtonComponent } from '@shared/ui/button';
import { InputComponent } from '@shared/ui/input';

import { ArticleFormModel, BlockFormGroup, FeatureItemForm } from '../model/article-form.types';

export const BLOCK_TYPES: Record<ArticleBlockType, ArticleBlockType> = {
    TEXT: 'TEXT',
    NOTE: 'NOTE',
    CODE: 'CODE',
    IMAGE: 'IMAGE',
    COMPLEXITY: 'COMPLEXITY',
    FEATURES: 'FEATURES',
};

/** Фабрика создания FormGroup для конкретного типа блока */
function createBlockGroup(
    fb: NonNullableFormBuilder,
    type: ArticleBlockType,
    initialData: any = {},
): FormGroup<BlockFormGroup> {
    let dataGroup: FormGroup;

    switch (type) {
        case 'TEXT':
            dataGroup = fb.group({
                format: fb.control<TextFormat>(initialData.format ?? 'MARKDOWN'),
                content: fb.control(initialData.content ?? '', [Validators.required]),
            });
            break;

        case 'CODE':
            dataGroup = fb.group({
                code: fb.control(initialData.code ?? '', [Validators.required]),
                language: fb.control(initialData.language ?? 'TYPESCRIPT', [Validators.required]),
                filename: fb.control<string | null>(initialData.filename ?? null),
            });
            break;

        case 'NOTE':
            dataGroup = fb.group({
                text: fb.control(initialData.text ?? '', [Validators.required]),
                noteType: fb.control<NoteType>(initialData.noteType ?? 'INFO', [
                    Validators.required,
                ]),
            });
            break;

        case 'COMPLEXITY':
            dataGroup = fb.group({
                time: fb.control(initialData.time ?? 'O(1)', [Validators.required]),
                space: fb.control(initialData.space ?? 'O(N)', [Validators.required]),
                description: fb.control<string | null>(initialData.description ?? null),
            });
            break;

        case 'IMAGE':
            dataGroup = fb.group({
                url: fb.control(initialData.url ?? '', [Validators.required]),
                alt: fb.control(initialData.alt ?? '', [Validators.required]),
                caption: fb.control<string | null>(initialData.caption ?? null),
            });
            break;

        case 'FEATURES':
            const itemsArray = fb.array<FormGroup<FeatureItemForm>>([]);
            const items = initialData.items?.length ? initialData.items : [{}];

            items.forEach((item: any) => {
                itemsArray.push(
                    fb.group({
                        title: fb.control(item.title ?? '', [Validators.required]),
                        text: fb.control(item.text ?? '', [Validators.required]),
                    }),
                );
            });

            dataGroup = fb.group({
                sectionTitle: fb.control(initialData.sectionTitle ?? '', [Validators.required]),
                items: itemsArray,
            });
            break;

        default:
            throw new Error(`Неизвестный тип контентного блока: ${type}`);
    }

    return fb.group<BlockFormGroup>({
        type: fb.control(type),
        data: dataGroup,
    });
}

@Component({
    selector: 'app-article-form',
    changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './article-form.component.html',
    styleUrl: './article-form.component.scss',
    imports: [ReactiveFormsModule, UpperCasePipe, RouterLink, ButtonComponent, InputComponent],
})
export class ArticleFormComponent implements OnInit {
    readonly category = input<string | undefined>();
    readonly slug = input<string | undefined>();

    readonly isEditMode = computed(() => !!this.slug());

    protected readonly isSubmitting = signal<boolean>(false);
    protected readonly blockTypes = BLOCK_TYPES;

    private readonly fb = inject(NonNullableFormBuilder);

    protected readonly form = this.fb.group<ArticleFormModel>({
        // READONLY
        authorId: this.fb.control({ value: '', disabled: true }),
        createdAt: this.fb.control({ value: '', disabled: true }),
        updatedAt: this.fb.control({ value: '', disabled: true }),
        id: this.fb.control({ value: '', disabled: true }),

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

        tags: this.fb.array<FormControl<ArticleTag>>([]),

        seo: this.fb.group({
            description: this.fb.control<string | null>(null),
            keywords: this.fb.array<FormControl<string>>([]),
        }),

        blocks: this.fb.array<FormGroup<BlockFormGroup>>([]),
    });

    ngOnInit(): void {
        if (this.isEditMode()) {
            // Здесь предполагается загрузка данных из стора/API.
            this.loadData(mockArticle);
        }
    }

    private loadData(article: Article): void {
        this.tagsFormArray.clear();
        this.seoKeywordsFormArray.clear();
        this.blocksFormArray.clear();

        if (article.tags?.length) {
            article.tags.forEach((tag) => this.addTag(tag));
        }

        if (article.seo?.keywords?.length) {
            article.seo.keywords.forEach((keyword) => this.addKeyword(keyword));
        }

        if (article.blocks?.length) {
            article.blocks.forEach((block) => {
                this.blocksFormArray.push(createBlockGroup(this.fb, block.type, block.data));
            });
        }

        this.form.patchValue({
            id: article.id,
            authorId: article.authorId,
            problemId: article.problemId ?? null,
            createdAt: article.createdAt,
            updatedAt: article.updatedAt,
            readingTimeMinutes: article.readingTimeMinutes ?? 0,
            title: article.title,
            slug: article.slug,
            categoryId: article.categoryId,
            status: article.status,
            level: article.level,
            leadText: article.leadText ?? '',
            description: article.description,
            coverImage: {
                url: article.coverImage?.url ?? '',
                alt: article.coverImage?.alt ?? '',
                caption: article.coverImage?.caption ?? null,
            },
            seo: {
                description: article.seo?.description ?? null,
            },
        });
    }

    // --- Геттеры для массивов ---

    protected get blocksFormArray(): FormArray<FormGroup<BlockFormGroup>> {
        return this.form.controls.blocks;
    }

    protected get tagsFormArray(): FormArray<FormControl<ArticleTag>> {
        return this.form.controls.tags;
    }

    protected get seoKeywordsFormArray(): FormArray<FormControl<string>> {
        return this.form.controls.seo.controls.keywords;
    }

    // --- Управление тегами и ключевыми словами ---

    protected addTag(value: ArticleTag = 'THEORY'): void {
        this.tagsFormArray.push(this.fb.control(value, [Validators.required]));
    }

    protected removeTag(index: number): void {
        this.tagsFormArray.removeAt(index);
    }

    protected addKeyword(value = ''): void {
        this.seoKeywordsFormArray.push(this.fb.control(value, [Validators.required]));
    }

    protected removeKeyword(index: number): void {
        this.seoKeywordsFormArray.removeAt(index);
    }

    // --- Управление контентными блоками ---

    protected addBlock(type: ArticleBlockType): void {
        this.blocksFormArray.push(createBlockGroup(this.fb, type));
    }

    protected removeBlock(index: number): void {
        this.blocksFormArray.removeAt(index);
    }

    // --- Вспомогательные методы для блока Features ---

    protected getFeatureItems(
        blockForm: FormGroup<BlockFormGroup>,
    ): FormArray<FormGroup<FeatureItemForm>> {
        return blockForm.get('data.items') as FormArray<FormGroup<FeatureItemForm>>;
    }

    protected addFeatureItem(blockIndex: number): void {
        const items = this.getFeatureItems(this.blocksFormArray.at(blockIndex));

        if (items) {
            items.push(
                this.fb.group({
                    title: this.fb.control('', [Validators.required]),
                    text: this.fb.control('', [Validators.required]),
                }),
            );
        }
    }

    protected removeFeatureItem(blockIndex: number, itemIndex: number): void {
        const items = this.getFeatureItems(this.blocksFormArray.at(blockIndex));

        if (items) {
            items.removeAt(itemIndex);
        }
    }

    // --- Сабмит ---

    protected onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        this.isSubmitting.set(true);

        const rawData = this.form.getRawValue();

        // Удаляем автогенерируемые поля
        const { createdAt, updatedAt, authorId, ...baseData } = rawData;

        const payload = this.isEditMode()
            ? baseData
            : (() => {
                  const { id, ...createData } = baseData;
                  return createData;
              })();

        console.log('Итоговый payload для сервера:', payload);
    }
}

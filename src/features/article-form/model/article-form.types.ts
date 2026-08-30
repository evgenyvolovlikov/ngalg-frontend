import { FormArray, FormControl, FormGroup } from '@angular/forms';

import {
    ArticleBlockType,
    ArticleLevel,
    ArticleStatus,
    ArticleTag,
    NoteType,
    TextFormat,
} from '@entities/article';

// --- Формы контентных блоков ---

export interface TextBlockForm {
    format: FormControl<TextFormat>;
    content: FormControl<string>;
}

export interface NoteBlockForm {
    text: FormControl<string | null>;
    noteType: FormControl<NoteType | null>;
}

export interface CodeBlockForm {
    code: FormControl<string>;
    language: FormControl<string>;
    filename: FormControl<string>;
}

export interface ImageBlockForm {
    url: FormControl<string | null>;
    alt: FormControl<string | null>;
    caption: FormControl<string | null>;
}

export interface ComplexityBlockForm {
    time: FormControl<string | null>;
    space: FormControl<string | null>;
    description: FormControl<string | null>;
}

export interface FeatureItemForm {
    title: FormControl<string>;
    text: FormControl<string>;
}

export interface FeaturesBlockForm {
    sectionTitle: FormControl<string | null>;
    items: FormArray<FormGroup<FeatureItemForm>>;
}

/**
 * Базовая структура блока.
 * В компоненте нужно делать type cast:
 * (block.get('data') as FormGroup<TextBlockForm>)
 */

export interface BlockFormGroup {
    type: FormControl<ArticleBlockType>;
    data: FormGroup<any>;
}

// --- Вспомогательные формы ---

export interface CoverImageForm {
    url: FormControl<string>;
    alt: FormControl<string>;
    caption: FormControl<string | null>;
}

export interface SeoForm {
    description: FormControl<string | null>;
    keywords: FormControl<string[]>;
}

// --- Главная форма ---

export interface ArticleFormModel {
    title: FormControl<string | null>;
    slug: FormControl<string | null>;
    categoryId: FormControl<string | null>;
    problemId: FormControl<string | null>;

    // Классификация
    status: FormControl<ArticleStatus | null>;
    level: FormControl<ArticleLevel | null>;

    // Контент превью
    leadText: FormControl<string | null>;
    description: FormControl<string | null>;
    readingTimeMinutes: FormControl<number | null>;

    coverImage: FormGroup<CoverImageForm>;

    tags: FormControl<ArticleTag[] | null>;

    seo: FormGroup<SeoForm>;

    blocks: FormArray<FormGroup<BlockFormGroup>>;
}

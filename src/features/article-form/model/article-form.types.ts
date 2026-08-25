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
    text: FormControl<string>;
    noteType: FormControl<NoteType>;
}

export interface CodeBlockForm {
    code: FormControl<string>;
    language: FormControl<string>;
    filename: FormControl<string | null>;
}

export interface ImageBlockForm {
    url: FormControl<string>;
    alt: FormControl<string>;
    caption: FormControl<string | null>;
}

export interface ComplexityBlockForm {
    time: FormControl<string>;
    space: FormControl<string>;
    description: FormControl<string | null>;
}

export interface FeatureItemForm {
    title: FormControl<string>;
    text: FormControl<string>;
}

export interface FeaturesBlockForm {
    sectionTitle: FormControl<string>;
    items: FormArray<FormGroup<FeatureItemForm>>;
}

/**
 * Базовая структура блока для FormArray.
 * Из-за ограничений вывода типов Angular Forms при использовании объединений (Union)
 * в FormArray, `data` остается слабо типизированной на верхнем уровне,
 * но кастуется к нужным интерфейсам при обращении.
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
    keywords: FormArray<FormControl<string>>;
}

// --- Главная форма ---

export interface ArticleFormModel {
    id: FormControl<string>;
    authorId: FormControl<string>;
    problemId: FormControl<string | null>;
    createdAt: FormControl<string>;
    updatedAt: FormControl<string>;

    readingTimeMinutes: FormControl<number>;

    title: FormControl<string>;
    slug: FormControl<string | null>;
    categoryId: FormControl<string>;

    status: FormControl<ArticleStatus>;
    level: FormControl<ArticleLevel>;
    leadText: FormControl<string>;
    description: FormControl<string>;

    coverImage: FormGroup<CoverImageForm>;

    tags: FormArray<FormControl<ArticleTag>>;

    seo: FormGroup<SeoForm>;

    blocks: FormArray<FormGroup<BlockFormGroup>>;
}

/**
 * Статус публикации статьи.
 */
export type ArticleStatus = 'DRAFT' | 'ARCHIVED' | 'PUBLISHED';

/**
 * Уровень сложности статьи или алгоритма.
 */
export type ArticleLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';

/**
 * Типы системных подсветок в заметках.
 */
export type NoteType = 'INFO' | 'WARNING' | 'ERROR';

/**
 * Поддерживаемые форматы текстовой разметки.
 */
export type TextFormat = 'HTML' | 'MARKDOWN';

/**
 * Теги классификации статей.
 */
export type ArticleTag =
    'THEORY' | 'COMPONENT' | 'EXAMPLE' | 'ALGORITHM' | 'STRUCTURE' | 'ARCHITECTURE' | 'PATTERNS';

// --- Данные отдельных блоков ---

export interface TextBlockData {
    content: string;
    format: TextFormat;
}

export interface NoteBlockData {
    text: string;
    noteType: NoteType;
}

export interface CodeBlockData {
    code: string;
    language: string;
    filename?: string;
}

export interface ImageBlockData {
    url: string;
    alt: string;
    caption?: string;
}

export interface ComplexityBlockData {
    time: string;
    space: string;
    description: string;
}

export interface FeatureItem {
    title: string;
    text: string;
}

export interface FeaturesBlockData {
    sectionTitle: string;
    items: FeatureItem[];
}

// --- Дискриминантные объединения блоков ---

export interface TextBlock {
    type: 'TEXT';
    data: TextBlockData;
}
export interface NoteBlock {
    type: 'NOTE';
    data: NoteBlockData;
}
export interface CodeBlock {
    type: 'CODE';
    data: CodeBlockData;
}
export interface ImageBlock {
    type: 'IMAGE';
    data: ImageBlockData;
}
export interface ComplexityBlock {
    type: 'COMPLEXITY';
    data: ComplexityBlockData;
}
export interface FeaturesBlock {
    type: 'FEATURES';
    data: FeaturesBlockData;
}

export type ArticleContentBlock =
    TextBlock | NoteBlock | CodeBlock | ImageBlock | ComplexityBlock | FeaturesBlock;

/**
 * Типы блоков, выводимые автоматически из самого объединения.
 */
export type ArticleBlockType = ArticleContentBlock['type'];

// --- Метаданные и доменные типы ---

export interface ArticleImage {
    url: string;
    alt: string;
    caption?: string;
}

export interface SeoMetadata {
    description?: string;
    keywords?: string[];
}

export type ProblemId = string;
export type AuthorId = string;
export type ArticleId = string;
export type CategoryId = string;

// --- Главная сущность статьи ---

export interface Article {
    id: ArticleId;
    slug: string;
    title: string;
    leadText: string;
    description: string;
    problemId?: ProblemId;
    authorId: AuthorId;
    categoryId: CategoryId;
    tags: ArticleTag[];
    status: ArticleStatus;
    level: ArticleLevel;
    coverImage?: ArticleImage;
    readingTimeMinutes: number;
    seo: SeoMetadata;
    blocks: ArticleContentBlock[];
    createdAt: string;
    updatedAt: string;
}

// --- DTO для работы с API ---

export interface ArticleCategoryItemDto {
    id: string;
    title: string;
    slug: string;
    tag?: ArticleTag;
}

export interface ArticleCategoryDto {
    id: CategoryId;
    name: string;
    slug: string;
    articles: ArticleCategoryItemDto[];
}

export interface CreateArticleDto extends Omit<
    Article,
    'id' | 'createdAt' | 'updatedAt' | 'authorId' | 'readingTimeMinutes'
> {
    coverImage?: ArticleImage;
}

export type UpdateArticleDto = Partial<CreateArticleDto>;

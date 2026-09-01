import { NavigationTag } from '@shared/types';

// --- Базовые типы и перечисления ---

export type ArticleStatus = 'DRAFT' | 'ARCHIVED' | 'PUBLISHED';
export type ArticleLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type NoteType = 'INFO' | 'WARNING' | 'ERROR';
export type TextFormat = 'HTML' | 'MARKDOWN';

// --- Данные отдельных блоков ---

export interface TextBlockData {
    format: string;
    content: string;
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

export type ArticleBlockType = ArticleContentBlock['type'];

// --- Метаданные и алиасы ---

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
    authorId?: AuthorId;
    categoryId: CategoryId;
    tags: NavigationTag[];
    status: ArticleStatus;
    level: ArticleLevel;
    coverImage?: ArticleImage;
    readingTimeMinutes: number;
    seo: SeoMetadata;
    blocks: ArticleContentBlock[];
    createdAt: string;
    updatedAt: string;
}

// --- Структура навигационного дерева ---
export interface NavigationArticle {
    id: string;
    title: string;
    slug: string;
    tag?: NavigationTag;
}

export type CreateArticleDto = Omit<Article, 'id' | 'createdAt' | 'updatedAt'>;

export type UpdateArticleDto = Partial<CreateArticleDto>;

export interface GetArticlesQueryDto {
    status?: ArticleStatus;
    categoryId?: string;
}

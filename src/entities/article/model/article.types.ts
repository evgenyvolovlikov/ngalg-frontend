// --- Базовые типы и перечисления ---

export type ArticleStatus = 'DRAFT' | 'ARCHIVED' | 'PUBLISHED';
export type ArticleLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
export type NoteType = 'INFO' | 'WARNING' | 'ERROR';
export type TextFormat = 'HTML' | 'MARKDOWN';

export type ArticleTag =
    'THEORY' | 'COMPONENT' | 'EXAMPLE' | 'ALGORITHM' | 'STRUCTURE' | 'ARCHITECTURE' | 'PATTERNS';

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
    problemId?: ProblemId | null;
    authorId: AuthorId;
    categoryId: CategoryId;
    tags: ArticleTag[];
    status: ArticleStatus;
    level: ArticleLevel;
    coverImage?: ArticleImage | null;
    readingTimeMinutes: number;
    seo: SeoMetadata;
    blocks: ArticleContentBlock[];
    createdAt: string; // ISO string на фронте
    updatedAt: string; // ISO string на фронте
}

// --- Структура навигационного дерева ---
// Жестко привязано к ответу GET /articles/navigation бекенда

export interface NavigationArticle {
    id: string;
    title: string;
    slug: string;
    tag?: ArticleTag;
}

export interface NavigationCategory {
    id: string;
    title: string;
    children: NavigationArticle[];
}

export interface NavigationSection {
    id: string;
    title: string;
    items: NavigationCategory[];
}

// --- DTO для работы с API ---

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface CreateArticleDto extends Omit<Article, 'id' | 'createdAt' | 'updatedAt'> {}

export type UpdateArticleDto = Partial<CreateArticleDto>;

export interface GetArticlesQueryDto {
    status?: ArticleStatus;
    categoryId?: string;
}

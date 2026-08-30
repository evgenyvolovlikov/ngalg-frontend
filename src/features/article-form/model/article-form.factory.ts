import { FormBuilder, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';

import {
    ArticleBlockType,
    CodeBlockData,
    ComplexityBlockData,
    FeaturesBlockData,
    ImageBlockData,
    NoteBlockData,
    NoteType,
    TextBlockData,
    TextFormat,
} from '@entities/article';

import { BlockFormGroup, FeatureItemForm } from '../model/article-form.types';

export function createFeatureItemForm(
    fb: FormBuilder,
    initialData?: { title: string; text: string },
): FormGroup {
    return fb.group({
        title: fb.control(initialData?.title ?? '', [Validators.required]),
        text: fb.control(initialData?.text ?? '', [Validators.required]),
    });
}

export function createBlockGroup(
    fb: NonNullableFormBuilder,
    type: ArticleBlockType,
    initialData?: unknown,
): FormGroup<BlockFormGroup> {
    let dataGroup: FormGroup;

    switch (type) {
        case 'TEXT': {
            const data = (initialData ?? {}) as Partial<TextBlockData>;
            dataGroup = fb.group({
                format: fb.control<TextFormat>((data.format as TextFormat) ?? 'MARKDOWN'),
                content: fb.control(data.content ?? '', [Validators.required]),
            });
            break;
        }

        case 'CODE': {
            const data = (initialData ?? {}) as Partial<CodeBlockData>;
            dataGroup = fb.group({
                code: fb.control(data.code ?? '', [Validators.required]),
                language: fb.control(data.language ?? 'TYPESCRIPT', [Validators.required]),
                filename: fb.control<string | null>(data.filename ?? null),
            });
            break;
        }

        case 'NOTE': {
            const data = (initialData ?? {}) as Partial<NoteBlockData>;
            dataGroup = fb.group({
                text: fb.control(data.text ?? '', [Validators.required]),
                noteType: fb.control<NoteType>((data.noteType as NoteType) ?? 'INFO', [
                    Validators.required,
                ]),
            });
            break;
        }

        case 'COMPLEXITY': {
            const data = (initialData ?? {}) as Partial<ComplexityBlockData>;
            dataGroup = fb.group({
                time: fb.control(data.time ?? 'O(1)', [Validators.required]),
                space: fb.control(data.space ?? 'O(N)', [Validators.required]),
                description: fb.control<string | null>(data.description ?? null),
            });
            break;
        }

        case 'IMAGE': {
            const data = (initialData ?? {}) as Partial<ImageBlockData>;
            dataGroup = fb.group({
                url: fb.control(data.url ?? '', [Validators.required]),
                alt: fb.control(data.alt ?? '', [Validators.required]),
                caption: fb.control<string | null>(data.caption ?? null),
            });
            break;
        }

        case 'FEATURES': {
            const data = (initialData ?? {}) as Partial<FeaturesBlockData>;
            const itemsArray = fb.array<FormGroup<FeatureItemForm>>([]);
            const items = data.items?.length ? data.items : [{ title: '', text: '' }];

            items.forEach((item) => {
                itemsArray.push(
                    fb.group<FeatureItemForm>({
                        title: fb.control(item.title ?? '', [Validators.required]),
                        text: fb.control(item.text ?? '', [Validators.required]),
                    }),
                );
            });

            dataGroup = fb.group({
                sectionTitle: fb.control(data.sectionTitle ?? '', [Validators.required]),
                items: itemsArray,
            });
            break;
        }

        default:
            throw new Error(`Неизвестный тип контентного блока: ${type}`);
    }

    return fb.group<BlockFormGroup>({
        type: fb.control(type),
        data: dataGroup,
    });
}

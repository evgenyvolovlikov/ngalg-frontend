import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnDestroy,
    ViewChild,
    model,
} from '@angular/core';

import loader from '@monaco-editor/loader';

import { TerminalContainerComponent } from '../terminal-container';

@Component({
    selector: 'app-code-editor',
    standalone: true,
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `<app-terminal-container title="Редактор кода">
        <div #editorContainer class="editor-container"></div
    ></app-terminal-container>`,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
                height: 100%;
            }

            .editor-container {
                width: 100%;
                height: 100%;
                overflow: hidden;
            }
        `,
    ],
    imports: [TerminalContainerComponent],
})
export class CodeEditorComponent implements AfterViewInit, OnDestroy {
    @ViewChild('editorContainer', { static: true })
    private readonly editorContainer!: ElementRef<HTMLElement>;

    public code = model<string>(
        'function search(arr, target) {\n  // Реализуйте функцию поиска\n}',
    );

    private editor: any;
    private resizeObserver?: ResizeObserver;

    public ngAfterViewInit(): void {
        this.initMonaco();
    }

    public ngOnDestroy(): void {
        this.editor?.dispose();
        this.resizeObserver?.disconnect();
    }

    private async initMonaco(): Promise<void> {
        const monaco = await loader.init();

        this.editor = monaco.editor.create(this.editorContainer.nativeElement, {
            value: this.code(),
            language: 'typescript',
            theme: 'vs-dark',
            automaticLayout: false,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            fontSize: 14,
            fontFamily: "'Geist Mono', monospace",
            hover: { enabled: true },
            quickSuggestions: false,
            parameterHints: { enabled: false },
            tabSize: 2,
            padding: { top: 16 },
            fixedOverflowWidgets: true,
        });

        this.editor.onDidChangeModelContent(() => {
            const currentCode = this.editor.getValue();
            if (currentCode !== this.code()) {
                this.code.set(currentCode);
            }
        });

        this.resizeObserver = new ResizeObserver(() => {
            this.editor.layout();
        });

        this.resizeObserver.observe(this.editorContainer.nativeElement);
    }
}

import fsdPlugin from '@conarti/eslint-plugin-feature-sliced';
import { fixupPluginRules } from '@eslint/compat';
import eslint from '@eslint/js';
import angular from 'angular-eslint';
import storybook from 'eslint-plugin-storybook';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        files: ['**/*.ts'],
        extends: [
            eslint.configs.recommended,
            ...tseslint.configs.recommended,
            ...tseslint.configs.stylistic,
            ...angular.configs.tsRecommended,
        ],
        plugins: {
            'feature-sliced': fixupPluginRules(fsdPlugin),
        },
        processor: angular.processInlineTemplates as any,
        rules: {
            '@angular-eslint/directive-selector': [
                'error',
                {
                    type: 'attribute',
                    prefix: 'app',
                    style: 'camelCase',
                },
            ],
            '@angular-eslint/component-selector': [
                'error',
                {
                    type: ['element', 'attribute'],
                    prefix: 'app',
                    style: 'kebab-case',
                },
            ],
            '@angular-eslint/prefer-standalone': 'error',
            '@angular-eslint/component-class-suffix': 'error',
            '@angular-eslint/directive-class-suffix': 'error',
            '@typescript-eslint/explicit-function-return-type': [
                'error',
                {
                    allowExpressions: true,
                    allowTypedFunctionExpressions: true,
                    allowHigherOrderFunctions: true,
                    allowDirectConstAssertionInArrowFunctions: true,
                },
            ],
            '@typescript-eslint/no-explicit-any': 'warn',

            /* Правила FSD */
            'feature-sliced/layers-slices': ['error', { allowTypeImports: true }],
            'feature-sliced/absolute-relative': 'error',
            'feature-sliced/public-api': 'error',
        },
    },
    {
        files: ['**/*.html'],
        extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
        rules: {
            '@angular-eslint/template/no-negated-async': 'error',
            '@angular-eslint/template/prefer-control-flow': 'error',
        },
    },
    storybook.configs['flat/recommended'] as any,

    {
        files: ['**/*.stories.ts'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
            'feature-sliced/public-api': 'off', // Сторисам можно импортировать напрямую
        },
    },
);

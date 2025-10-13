import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';

const eslintConfig = tseslint.config(
  {
    name: 'eslint-base',
    ...eslint.configs.recommended,
    languageOptions: {
      parser: tseslint.parser,
      sourceType: 'module',
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,
  {
    name: 'next-rules',
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  ...tseslint.config(
    {
      name: 'project-overrides',
      rules: {
        'react/no-unescaped-entities': 'off',
        '@next/next/no-img-element': 'off',
        '@typescript-eslint/no-unused-expressions': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off',
        '@typescript-eslint/consistent-indexed-object-style': 'off',
        'react-hooks/exhaustive-deps': 'off',
        '@next/next/no-html-link-for-pages': 'off',
        '@next/next/no-document-import-in-page': 'off',
      },
    }
  )
);

export default eslintConfig;
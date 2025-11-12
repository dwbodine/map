// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';

// 🧩 This configuration:
// - Uses the Flat Config format (ESLint v9+)
// - Disables stylistic Prettier conflicts (no redundant plugin)
// - Keeps Prettier as an external formatter (run with `prettier --write`)

export default [
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    ignores: [
      'dist/**',
      'node_modules/**',
      'eslint.config.js',
      'prettier.config.cjs',
      'tsconfig.json',
      'webpack.config.js',
    ],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
    },

    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      '@typescript-eslint': tsPlugin,
      import: importPlugin,
    },

    rules: {
      /* --- Base & React --- */
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      ...tsPlugin.configs.recommended.rules,

      /* --- React 19 / JSX --- */
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',

      /* --- TypeScript --- */
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      /* --- Imports --- */
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],

      /* --- Misc --- */
      'no-console': 'off',
    },

    settings: {
      react: { version: 'detect' },
    },
  },

  // Disable stylistic rules that conflict with Prettier
  eslintConfigPrettier,
];

import js from '@eslint/js'
import tsEslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
  {
    ignores: ['dist', 'node_modules'], // Archivos y carpetas ignorados
    files: ['**/*.{ts,tsx,js,jsx}'], // Archivos a lint
    languageOptions: {
      ecmaVersion: 'latest', // Versión de ECMAScript más reciente
      sourceType: 'module', // Módulos ES
      globals: globals.browser, // Soporte para los globales del navegador
      parser: tsParser, // Parser para TypeScript
    },
    linterOptions: {
      reportUnusedDisableDirectives: true, // Detecta directivas deshabilitadas no usadas
    },
    plugins: {
      'react-hooks': reactHooks, // Plugin para React Hooks
      'react-refresh': reactRefresh, // Plugin para React Refresh
      '@typescript-eslint': tsEslint, // Plugin para TypeScript
      'jsx-a11y': jsxA11y, // Plugin para accesibilidad en JSX
    },
    rules: {
      ...js.configs.recommended.rules, // Reglas recomendadas de JavaScript
      ...tsEslint.configs.recommended.rules, // Reglas recomendadas de TypeScript
      ...reactHooks.configs.recommended.rules, // Reglas recomendadas de React Hooks
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      '@typescript-eslint/no-unused-vars': 'warn', // Advertencia para variables no usadas en TypeScript
      'jsx-a11y/no-static-element-interactions': 'warn', // Accesibilidad para interacciones de elementos estáticos
    },
  },
  prettierConfig, // Configuración de Prettier añadida directamente
]

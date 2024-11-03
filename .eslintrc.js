module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    plugins: [
        'react',
        'prettier',
        '@typescript-eslint'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'prettier/prettier': 'error',
        'react/prop-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
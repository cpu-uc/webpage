module.exports = {
    env: { browser: true, es2021: true, node: true },
    extends: [
        'airbnb',
        'plugin:react/recommended',
        'plugin:astro/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true }
    },
    rules: {
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
    },
    overrides: [
        {
            files: ['*.astro'],
            parser: 'astro-eslint-parser',
            parserOptions: {
                parser: '@typescript-eslint/parser',
                extraFileExtensions: ['.astro'],
            },
        }
    ]
};
module.exports = {
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    useTabs: true,
    trailingComma: 'es5',
    plugins: [
        (async () => {
            const plugin = await import('prettier-plugin-astro');
            return plugin.default || plugin;
        })()
    ],
    overrides: [
        {
            files: '**/*.astro',
            options: {
                parser: 'astro',
            },
        },
    ],
};

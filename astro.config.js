import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { resolve } from 'path';

export default defineConfig({
    integrations: [react()],
    site: 'http://localhost:8000', // URL local para desarrollo
    vite: {
        resolve: {
            alias: {
                '@': resolve('./resources/js'),
                '@css': resolve('./resources/css'),
                '@assets': resolve('./resources/assets'),
                '@views': resolve('./resources/views'),
                'src/pages': resolve('./resources/js/Pages'), // Alias para redirigir src/pages a resources/js/Pages
            },
        },
    },
});

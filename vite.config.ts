import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		checker({
			eslint: {
				lintCommand: 'eslint "./src/**/*.{ts,tsx}"', // for example, lint .ts & .tsx
			},
		}),
	],
});

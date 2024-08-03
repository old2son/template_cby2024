import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		alias: {
			'@src': 'src'
		},
		files: {
			lib: 'src/lib'
		},
		prerender: {
			handleHttpError: ({ status, path, referrer, referenceType }) => {
				if (status === 403) {
					console.log(`Error: ${status} on ${path}`);
					return;
				}
				console.error(`Error: ${status} on ${path}`);
			}
		}
	}
};

export default config;

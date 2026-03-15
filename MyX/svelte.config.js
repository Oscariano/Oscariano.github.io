import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html', // Essential for SPA-like routing on GH Pages
      strict: true
    }),
    paths: {
      // If your repo is "my-site", base should be "/my-site"
      // If it's your primary "username.github.io", leave as an empty string
      base: process.env.NODE_ENV === 'production' ? '/MyX' : '',
    },
    prerender: {
      handleHttpError: 'warn'
    }
  },
};

export default config;
// @ts-check
import { defineConfig } from 'astro/config';
import clerk from '@clerk/astro';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  integrations: [clerk()],
  adapter: node({
    mode: 'standalone',
  }),
  output: 'server',
});

// @ts-check
import { defineConfig } from 'astro/config';
import clerk from '@clerk/astro';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), clerk()],
  adapter: vercel(),
  output: 'server',
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'agencia-b2b';

export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? `/${repoName}/` : '/',
  plugins: [react()],
});

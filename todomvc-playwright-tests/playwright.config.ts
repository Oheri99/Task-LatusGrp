import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://reqres.in',  // ✅ all requests will use this base
    ignoreHTTPSErrors: true,
    headless: true,
    screenshot: 'only-on-failure', // captures screenshots on failure
    video: 'retain-on-failure',    // captures videos on failure
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],
});


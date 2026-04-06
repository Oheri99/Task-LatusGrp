import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://reqres.in',  // ✅ all requests will use this base
    ignoreHTTPSErrors: true,
    headless: false,
    screenshot: 'only-on-failure', // captures screenshots on failure
    video: 'retain-on-failure',    // captures videos on failure
  },
  reporter: [
    ['list'],
    ['html', { open: 'never' }],
    ['allure-playwright']
  ],
});
// import { defineConfig } from '@playwright/test';

// export default defineConfig({
//   testDir: './tests',
//   use: {
//     baseURL: 'http://localhost:3000', // Change to your TodoMVC app URL
//     ignoreHTTPSErrors: true,
//     headless: true, // Set to true for CI, false for debugging
//     screenshot: 'only-on-failure',
//     video: 'retain-on-failure',
//   },
//   reporter: [
//     ['list'],
//     ['html', { open: 'never' }],
//     ['allure-playwright']
//   ],
// });


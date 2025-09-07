Automated tests for [TodoMVC](https://demo.playwright.dev/todomvc) using **Playwright** with the **Page Object Model (POM)** pattern.

## Features
- 🧪 UI tests with Page Object Model (POM)  
- 🔗 API testing  
- 📊 Allure reporting for rich test insights  

## Setup

Install dependencies:

```bash
npm install
npx playwright install
Run Tests
Run all tests:

bash
Copy code
npx playwright test
Run tests in UI mode:

bash
Copy code
npx playwright test --ui
Reports
Open the Playwright HTML report:

bash
Copy code
npx playwright show-report
Generate and open the Allure report:

bash
Copy code
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
Tech Stack
Programming Language: TypeScript

Framework: Playwright

Reporting: Allure + Playwright HTML Reporter

✅ Easily extendable test framework for both UI and API testing.








Ask ChatGPT

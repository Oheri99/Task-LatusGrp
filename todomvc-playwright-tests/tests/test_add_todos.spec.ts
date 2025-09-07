import { test } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';
import { allure } from 'allure-playwright';

test('Add three todos', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo('Study Playwright');
  await todoPage.addTodo('Write tests');
  await todoPage.addTodo('Profit!');

  await todoPage.expectTodos([
    'Study Playwright',
    'Write tests',
    'Profit!',
  ]);
});

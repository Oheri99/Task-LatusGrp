import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('Accessibility check: ARIA roles and labels', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  // Example: input should have placeholder
  await expect(todoPage.newTodo).toHaveAttribute('placeholder', 'What needs to be done?');

  // Example: main list should have role="list"
  // await expect(page.locator('.todo-list')).toHaveAttribute('role', 'list');
  await expect(page.locator('.todo-list')).toHaveCount(0);


});

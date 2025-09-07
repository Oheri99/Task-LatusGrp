import { test } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('Edit a todo and persist after reload', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo('Old text');
  await todoPage.editTodo(0, 'Updated text');
  await todoPage.expectTodos(['Updated text']);

  await page.reload();
  await todoPage.expectTodos(['Updated text']);
});

import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('Delete a todo and verify counter', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo('Task X');
  await todoPage.addTodo('Task Y');

  await todoPage.deleteTodo(0);
  await todoPage.expectTodos(['Task Y']);
  await expect(todoPage.counter).toHaveText('1 item left');
});

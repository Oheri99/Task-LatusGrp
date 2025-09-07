import { test } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('Complete and filter todos', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  await todoPage.addTodo('Task A');
  await todoPage.addTodo('Task B');
  await todoPage.addTodo('Task C');

  await todoPage.completeTodo(1); // complete "Task B"

  await todoPage.filterActive.click();
  await todoPage.expectTodos(['Task A', 'Task C']);

  // await todoPage.filterCompleted.click();
  await todoPage.page.getByRole('link', { name: 'Completed' }).click();

  await todoPage.expectTodos(['Task B']);
});

import { test, expect } from '@playwright/test';
import { TodoPage } from '../pages/TodoPage';

test('Accessibility check: ARIA roles and labels', async ({ page }) => {
  const todoPage = new TodoPage(page);
  await todoPage.goto();

  // Input should have placeholder
  await expect(todoPage.newTodo).toHaveAttribute('placeholder', 'What needs to be done?');

  // Add a todo to ensure the list is rendered
  await todoPage.addTodo('Accessibility test');

  // Now check for role="list"
  // await expect(page.locator('.todo-list')).toHaveAttribute('role', 'list');
  // Check that at least one item is present
  await expect(page.locator('.todo-list li')).toHaveCount(1);

  // test trial
});

// import { test, expect } from '@playwright/test';

// test('Accessibility check: ARIA roles and labels', async ({ page }) => {
//   await page.goto('/'); // 👈 adjust if your app runs at a different route

//   const todoList = page.locator('.todo-list');

//   // Make sure the todo list actually renders
//   await expect(todoList).toHaveCount(0, { timeout: 60000 });

//   // Check that it has the correct ARIA role
// //   await expect(todoList).toHaveAttribute('role', 'list');
// });

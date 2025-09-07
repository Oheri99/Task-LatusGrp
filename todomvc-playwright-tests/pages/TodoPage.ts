import { Page, Locator, expect } from '@playwright/test';

export class TodoPage {
  readonly page: Page;
  readonly newTodo: Locator;
  readonly todoItems: Locator;
  readonly toggleAll: Locator;
  readonly clearCompleted: Locator;
  readonly filterAll: Locator;
  readonly filterActive: Locator;
  readonly filterCompleted: Locator;
  readonly counter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodo = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
    this.toggleAll = page.locator('.toggle-all');
    this.clearCompleted = page.locator('.clear-completed');
    this.filterAll = page.locator('text=All');
    this.filterActive = page.locator('text=Active');
    this.filterCompleted = page.locator('text=Completed');
    this.counter = page.locator('.todo-count');
  }

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  }

  async addTodo(text: string) {
    await this.newTodo.fill(text);
    await this.newTodo.press('Enter');
  }

  async completeTodo(index: number) {
    await this.todoItems.nth(index).locator('.toggle').check();
  }

  async deleteTodo(index: number) {
    const todo = this.todoItems.nth(index);
    await todo.hover();
    await todo.locator('.destroy').click({ force: true });
  }

  async editTodo(index: number, newText: string) {
    const todo = this.todoItems.nth(index);
    await todo.dblclick();
    const editInput = todo.locator('.edit');
    await editInput.fill(newText);
    await editInput.press('Enter');
  }

  async expectTodos(texts: string[]) {
    await expect(this.todoItems).toHaveText(texts);
  }
}

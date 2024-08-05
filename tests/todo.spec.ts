// tests/todolist.spec.ts
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('http://localhost:3000/dashboard');
});


test('can add a task', async ({ page }) => {


    await page.fill('input[type="text"]', 'New Task');
    await page.click('button:has-text("Add Task")');

    const task = await page.waitForSelector('li:has-text("New Task")');
    expect(task).toBeTruthy();
});

test('can toggle task completion', async ({ page }) => {


    await page.fill('input[type="text"]', 'Task to Complete');
    await page.click('button:has-text("Add Task")');

    const task = await page.locator('li:has-text("Task to Complete")');
    await task.click();

    expect(await task.evaluate(node => node.style.textDecoration)).toBe('line-through');
});

test('task input clears after adding a task', async ({ page }) => {


    await page.fill('input[type="text"]', 'Another Task');
    await page.click('button:has-text("Add Task")');

    const input = await page.locator('input[type="text"]');
    await expect(input).toHaveValue('');
});

test('displays correct number of tasks', async ({ page }) => {


    await page.fill('input[type="text"]', 'First Task');
    await page.click('button:has-text("Add Task")');

    await page.fill('input[type="text"]', 'Second Task');
    await page.click('button:has-text("Add Task")');

    const tasks = await page.locator('li');
    expect(await tasks.count()).toBe(2);
});
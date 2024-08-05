// tests/form.spec.ts
import { test, expect } from '@playwright/test';



test.beforeEach(async ({ page }) => {
    console.log(`Running ${test.info().title}`);
    await page.goto('http://localhost:3000/menu');
});

test('form submission works', async ({ page }) => {


    // await page.fill('#name', 'John Doe');
    // await page.fill('#email', 'john@example.com');
    await page.getByLabel("Name:").fill("John Doe");
    // await page.fill('#email', 'john@example.com');
    await page.getByLabel("Email:").fill("john@example.com");
    await page.click('button[type="submit"]');

    page.on('console', msg => {
        if (msg.type() === 'log') {
            expect(msg.text()).toBe('Name: John Doe, Email: john@example.com');
        }
    });
});



test('form shows error message when fields are empty', async ({ page }) => {


    await page.click('button[type="submit"]');

    const errorMessage = await page.waitForSelector('div:has-text("Both fields are required")');
    expect(errorMessage).toBeTruthy();
});

test('form clears error message after successful submission', async ({ page }) => {


    await page.click('button[type="submit"]');
    // await page.fill('#name', 'John Doe');
    // await page.fill('#email', 'john@example.com');
    await page.getByLabel("Name:").fill("John Doe");
    // await page.fill('#email', 'john@example.com');
    await page.getByLabel("Email:").fill("john@example.com");
    await page.click('button[type="submit"]');

    const errorMessage = await page.locator('div:has-text("Both fields are required")');
    expect(await errorMessage.count()).toBe(0);
});


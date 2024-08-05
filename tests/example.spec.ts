import Sidebar from '@/src/components/Sidebar';
import { test, expect } from '@playwright/test';
import { test as testComponent, expect as expectComponent } from '@playwright/experimental-ct-react';

test('has title', async ({ page }) => {
    await page.goto('http://localhost:3000/dashboard');

    // get a div that has the text "This is the dashboard page"
    const dashboardPage = await page.waitForSelector('div:has-text("This is the dashboard page")');
});


// testComponent('has sidebar', async ({ page, mount }) => {
//     await page.goto('http://localhost:3000')


//     const sidebar = await mount(Sidebar());

//     await expectComponent(sidebar).toContainText('Dashboard');
// })


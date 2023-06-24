const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { DashboardPage } = require('../PageObjects/DashboardPage');
const loginData = JSON.parse(JSON.stringify(require('../Utils/TestData/LoginTestData.json')));

test("Logout validation", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    await loginPage.goToPage();
    await loginPage.login(loginData.userName, loginData.password);

    expect(await dashboardPage.getPageTitle()).toHaveText(loginData.expectedPageTitle);

    await dashboardPage.goToLogOut();
    await expect(page).toHaveURL("https://focalpointqa.nearshoretechnology.com/login?logout");
    await page.pause();
});

// test("Login validation", async ({page})=>
// {
//     await page.goto("https://focalpointqa.nearshoretechnology.com/login");
//     await page.locator("#username").fill("resourcemanager.automation@nearshoretechnology.com");
//     await page.locator("#password").type("123456");
//     await page.locator(".btn-sm[type= 'submit']").click();

//     const dashboardLetter= page.locator(".big-title");
//     await expect(dashboardLetter).toHaveText("Resource Manager Dashboard");

//     await page.pause();
// });
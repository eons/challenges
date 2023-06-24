const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../PageObjects/LoginPage');
const { DashboardPage } = require('../PageObjects/DashboardPage');
const loginData = JSON.parse(JSON.stringify(require('../Utils/TestData/LoginTestData.json')));

let page;
let loginPage;
let dashboardPage;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await loginPage.goToPage();
    await loginPage.login(loginData.userName, loginData.password);
});

test.afterEach(async () => {
    await page.close();
});

test("Login validation", async () => {
    await expect(await dashboardPage.getPageTitle()).toHaveText(loginData.expectedPageTitle);
});

test("Logout validation", async () => {
    dashboardPage.goToLogOut();
    await expect(page).toHaveURL("https://focalpointqa.nearshoretechnology.com/login?logout");
});
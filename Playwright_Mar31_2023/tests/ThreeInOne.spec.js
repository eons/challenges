const { test, expect } = require('@playwright/test');
const { POManager } = require('../PageObjects/POManager');
const loginData = JSON.parse(JSON.stringify(require('../Utils/TestData/LoginTestData.json')));

let page;
let poManager;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goToPage();
    await loginPage.login(loginData.userName, loginData.password);
});

test.afterEach(async () => {
    await page.close();
});


test("Validate Resource Manager Credentials", async () => {
    const dashboardPage = poManager.getDashboardPage();
    await expect(await dashboardPage.getPageTitle()).toHaveText(loginData.expectedPageTitle);
});


test("LogOut", async () => {
    const dashboardPage = poManager.getDashboardPage();
    await dashboardPage.goToLogOut();
    await expect(page).toHaveURL("https://focalpointqa.nearshoretechnology.com/login?logout");
});


test("Validate Menu items are displayed", async () => {
    const dashboardPage = poManager.getDashboardPage();
    const myTimesheetsPage = poManager.getMyTimesheetsPage();
    const myTasksPage = poManager.getMyTasksPage();
    const myAccountPage = poManager.getMyAccountPage();
    const notificationsPage = poManager.getNotificationsPage();

    expect(await dashboardPage.isExpectedMenuDisplayed()).toBeTruthy();

    await dashboardPage.goToMyTimesheets();
    expect(await myTimesheetsPage.isExpectedMenuDisplayed()).toBeTruthy();

    await myTimesheetsPage.goToMyTasks();
    expect(await myTasksPage.isExpectedMenuDisplayed()).toBeTruthy();

    await myTasksPage.goToMyAccount();
    expect(await myAccountPage.isExpectedMenuDisplayed()).toBeTruthy();

    await myAccountPage.goToNotifications();
    expect(await notificationsPage.isExpectedMenuDisplayed()).toBeTruthy();
});
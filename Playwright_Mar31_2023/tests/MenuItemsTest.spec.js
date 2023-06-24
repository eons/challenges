const { test, expect } = require('@playwright/test');
const { POManager } = require('../PageObjects/POManager');
const loginData = JSON.parse(JSON.stringify(require('../Utils/TestData/LoginTestData.json')));

test("Menu items validation", async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();
    const myTimesheetsPage = poManager.getMyTimesheetsPage();
    const myTasksPage = poManager.getMyTasksPage();
    const myAccountPage = poManager.getMyAccountPage();
    const notificationsPage = poManager.getNotificationsPage();

    await loginPage.goToPage();
    await loginPage.login(loginData.userName, loginData.password);
    expect(await dashboardPage.getPageTitle()).toHaveText(loginData.expectedPageTitle);

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
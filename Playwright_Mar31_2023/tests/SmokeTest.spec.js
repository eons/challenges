const {test, expect}= require('@playwright/test');
const {POManager}= require('../PageObjects/POManager');
const validUser= JSON.parse(JSON.stringify(require('../Utils/TestData/manualPracticeTestData.json')));

let page;
let poManager; 

// ****************************** test.describe.configure({ mode: 'serial' });

test.beforeEach(async ({ browser }) => 
{
    page= await browser.newPage();
    poManager= new POManager(page);
    const loginPage= poManager.getLoginPage();
    await loginPage.goToPage();
    await loginPage.Login(validUser.userName, validUser.password);
});

test.afterEach(async () =>
{
    await page.close();
});


test("Validate Resource Manager Credentials",async () => 
{
    const dashboardPage= poManager.getDashboardPage();
    const currentPageTitle= await dashboardPage.getPageTitle();
    await expect(currentPageTitle).toHaveText(validUser.expectedPageTitle);
});


test("LogOut",async () => 
{
    const dashboardPage= poManager.getDashboardPage();
    dashboardPage.gotoLogOut();
    await expect(page).toHaveURL("https://focalpointqa.nearshoretechnology.com/login?logout");
});


test("Validate Menu items are displayed",async () => 
{
    const dashboardPage= poManager.getDashboardPage();
    const myTimesheetsPage= poManager.getMyTimesheetsPage();
    const myTasksPage= poManager.getMyTasksPage();
    const myAccountPage= poManager.getMyAccountPage();
    const notificationsPage= poManager.getNotificationsPage();

    expect(await dashboardPage.isExpectedMenuDisplayed()).toBeTruthy();
    
    await dashboardPage.gotoMyTimesheets();
    expect(await myTimesheetsPage.isExpectedMenuDisplayed()).toBeTruthy();

    await myTimesheetsPage.gotoMyTasks();
    expect(await myTasksPage.isExpectedMenuDisplayed()).toBeTruthy();

    await myTasksPage.gotoMyAccount();
    expect(await myAccountPage.isExpectedMenuDisplayed()).toBeTruthy();

    await myAccountPage.gotoNotifications();
    expect(await notificationsPage.isExpectedMenuDisplayed()).toBeTruthy();
});
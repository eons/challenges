const {test, expect}= require('@playwright/test');
const {POManager}= require('../../PageObjects/POManager');
const dataSet= JSON.parse(JSON.stringify(require('../../Utils/TestData/customCommandsTestData.json')));

//test.describe.configure({mode: 'parallel'});
//test.describe.configure({mode: 'serial'});

test("Validate Invalid User Message", async ({page})=>
{
    const poManager= new POManager(page);
    const loginPage= poManager.getLoginPage();

    await loginPage.gotoPage();
    await loginPage.enterInvalidCredentials(dataSet[0].invalidUsername, dataSet[0].invalidPassword);
    await loginPage.validateInvalidUserMessage(dataSet[0].invalidMessage);

    //await page.pause();
});

test("Validate Locked User Message", async ({page})=>
{
    const poManager= new POManager(page);
    const loginPage= poManager.getLoginPage();

    await loginPage.gotoPage();
    await loginPage.enterLockedCredentials(dataSet[1].lockedUsername, dataSet[1].lockedPassword);
    await loginPage.validateLockedUserMessage(dataSet[1].lockedMessage);

    //await page.pause();
});

test("Validate that the User can purchase an item", async ({page})=>
{
    const poManager= new POManager(page);
    const loginPage= poManager.getLoginPage();
    const dashboardPage= poManager.getDashboardPage();
    const cartPage= poManager.getCartPage();
    const checkoutPage= poManager.getCheckoutPage();
    const orderOverviewPage= poManager.getOrderOverviewPage();
    const thanksPage= poManager.getThanksPage();

    await loginPage.gotoPage();
    await loginPage.entervalidCredentials(dataSet[2].validUsername, dataSet[2].validPassword);
    await loginPage.validateDashboardMessage(dataSet[2].dashboardMessage);
    await dashboardPage.searchProductAddCart(dataSet[2].productName);
    await dashboardPage.navigateToCartPAge();
    await cartPage.verifyProductIsDisplayed(dataSet[2].productName);
    await cartPage.clickOnCheckoutButton();
    await checkoutPage.filloutCheckouForm(dataSet[3].firstName, dataSet[3].lastName, dataSet[3].postalCode);
    await checkoutPage.clickOnContinue();
    await orderOverviewPage.completeOrder();
    await thanksPage.validateOrderCompletion(dataSet[4].completionLetter);

    //await page.pause();
});
const {test, expect}= require('@playwright/test');
const {POManager}= require('../PageObjects/POManager');
const dataSet= JSON.parse(JSON.stringify(require('../Utils/TestData/03_&_04_TestData.json')));

test("Validate that it's no possible to Checkout without Information details", async ({page}) =>
{
    const poManager= new POManager(page);

    const logiPage= poManager.getLoginPage();
    const dashboardPage= poManager.getDasboardPage();
    const cartPage= poManager.getCartPage();
    const checkoutPage= poManager.getCheckoutPage();

    await logiPage.goToPage();
    await logiPage.getLogin(dataSet.userName, dataSet.password);
    await dashboardPage.searchProductAddCart(dataSet.productName3);
    await dashboardPage.gotoCartPage();
    expect(await cartPage.verifyProductIsDisplayed(dataSet.productName3)).toBeTruthy;
    await cartPage.clickCheckoutButton();
    await checkoutPage.validateMandatoryFields(dataSet.cvvCode, dataSet.nameOnCard, dataSet.applyCoupon, dataSet.country);

    await page.pause();
    await dashboardPage.getSignOut();
});
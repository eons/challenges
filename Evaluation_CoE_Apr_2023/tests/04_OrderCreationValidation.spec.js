const {test, expect}= require('@playwright/test');
const {POManager}= require('../PageObjects/POManager');
const loginData= JSON.parse(JSON.stringify(require('../Utils/TestData/02_AccountCreationValidationTestData.json')))

test("Validate Checkout completed and CSV contains correct purchase information", async ({page}) =>
{
    const poManager= new POManager(page);
    const loginPage= poManager.getLoginPage();
    const dashboardPage= poManager.getDasboardPage();
    const cartPage= poManager.getCartPage();
    const checkoutPage= poManager.getCheckoutPage();
    const thanksPage= poManager.getThanksPage();

    loginPage.getLogin()
});
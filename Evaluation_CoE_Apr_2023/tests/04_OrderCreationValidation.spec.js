const {test, expect}= require('@playwright/test');
const {POManager}= require('../PageObjects/POManager');
const dataSet= JSON.parse(JSON.stringify(require('../Utils/TestData/03_&_04_TestData.json')))

test("Validate Checkout completed and CSV contains correct purchase information", async ({page}) =>
{
    const poManager= new POManager(page);
    const loginPage= poManager.getLoginPage();
    const dashboardPage= poManager.getDasboardPage();
    const cartPage= poManager.getCartPage();
    const checkoutPage= poManager.getCheckoutPage();
    const thanksPage= poManager.getThanksPage();

    await loginPage.goToPage();
    await loginPage.getLogin(dataSet.userName, dataSet.password);
    await dashboardPage.searchProductAddCart(dataSet.productName1);
    await dashboardPage.searchProductAddCart(dataSet.productName2);
    await dashboardPage.searchProductAddCart(dataSet.productName3);
    await dashboardPage.gotoCartPage();
    expect(await cartPage.verifyProductIsDisplayed(dataSet.productName1)).toBeTruthy;
    expect(await cartPage.verifyProductIsDisplayed(dataSet.productName2)).toBeTruthy;
    expect(await cartPage.verifyProductIsDisplayed(dataSet.productName3)).toBeTruthy;
    await cartPage.clickCheckoutButton();
    await checkoutPage.checkoutHappyPath(dataSet.country);
    await thanksPage.getOrderIds();
    await thanksPage.downloadCSVOrderDetails();
    await thanksPage.gotoOrdersPage();

    //await page.pause();
});
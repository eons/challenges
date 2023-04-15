const {test, expect}= require('@playwright/test');
const {POManager}= require('../PageObjects/POManager');
const dataSet= JSON.parse(JSON.stringify(require('../Utils/TestData/02_AccountCreationValidationTestData.json')));

for(const data of dataSet)
{
test(`Account Creation Validation ${data.scenario}`, async ({page}) =>
{
    const poManager= new POManager(page);
    const loginPage= poManager.getLoginPage();

    await loginPage.goToPage();
    expect(await loginPage.isAccountCreatedSuccessfully(data.firstName, data.lastName,
        data.occupation, data.gender, data.password, data.is18YearsOrOlder))
        .toBeTruthy();
});
}

const {test, expect}= require('@playwright/test');
const {POManager}= require('../PageObjects/POManager');
const dataSet= JSON.parse(JSON.stringify(require('../Utils/TestData/01_SocialMediaValidationTestData.json')));

for(const data of dataSet)
{ 
test(`Social Media Icons Validation ${data.socialMedia}`, async ({page}) =>
{
    const poManager= new POManager(page);
    const loginPage= poManager.getLoginPage();

    await loginPage.goToPage();
    expect(await loginPage.isSocialMediaIconRedirected(data.socialMedia)).toBeTruthy();
    //await expect(page).toHaveURL(data.expectedURL);
});
}
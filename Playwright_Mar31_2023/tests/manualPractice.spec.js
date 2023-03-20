const {test, expect}= require('@playwright/test');
const { POManager } = require('../PageObjects/POManager');
const credentials= JSON.parse(JSON.stringify("D:\MyWorkspace\FocalPoint_JS\Utils\RM_ValidationsTestData.json"));

test.describe.configure({ mode: 'serial' });
let page;

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });
  
  test.afterAll(async () => {
    await page.close();
  });

test.only("Resource Maanger Login Validation", async ()=>
{
    const poManager= new POManager(page);
});

test("Resource Maanger Menu Validation", async ()=>
{

});
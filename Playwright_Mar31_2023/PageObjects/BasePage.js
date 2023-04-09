const roles= require('../Utils/TestData/menuLettersTestData.json');

class BasePage
{
    constructor(_page)
    {
        this.menuItemsContainer= _page.locator("ul.navbar-nav li:not([class='divider'])");
        this.pageTitleElement= _page.locator(".big-title");
        this.resourceManagementMenuItem= _page.locator("//a[contains(text(), 'Resource Management')]");
        this.MyTimesheetsMenuItem= _page.locator("//a[contains(text(), 'My Timesheets')]");
        this.MyTasksMenuItem= _page.locator("//a[contains(text(), 'My Tasks')]");
        this.automationResourceManagerMenuItem= _page.locator("//span[contains(text(), 'Automation, ResourceManager')]");
        this.MyAccountMenuItem= _page.locator("//a[@href= '/account/edit']");
        this.NotificationsMenuItem= _page.locator("//a[@href= '/notifications/edit']");
        this.logOutMenuItem= _page.locator("#logout");
    }

    getPageTitle()
    {
       return this.pageTitleElement;
    }

    async isExpectedMenuDisplayed()
    {
        const expectedMenuItems= roles[0].menuItemsList;
        let originalTitles;
        
        originalTitles = await this.menuItemsContainer.allInnerTexts();

        const currentMenuItems= originalTitles.map(element =>
         {
            return element.trim();
         });

         return expectedMenuItems.length === currentMenuItems.length &&
         expectedMenuItems.every((title, i) => title === currentMenuItems[i]);
     }

     async gotoResourceManagement()
     {
        await this.resourceManagementMenuItem.click();
     }

     async gotoMyTimesheets()
     {
        await this.MyTimesheetsMenuItem.click();
     }

     async gotoMyTasks()
     {
        await this.MyTasksMenuItem.click();
     }

     async gotoMyAccount()
     {
        await this.automationResourceManagerMenuItem.click();
        await this.MyAccountMenuItem.click();
     }

     async gotoMyAccount()
     {
        await this.automationResourceManagerMenuItem.click();
        await this.MyAccountMenuItem.click();
     }

     async gotoNotifications()
     {
        await this.automationResourceManagerMenuItem.click();
        await this.NotificationsMenuItem.click();
     }

     async gotoLogOut()
     {   
        try // first execution without the exception 
        {
         await this.automationResourceManagerMenuItem.click();
         await this.logOutMenuItem.click();
         
        }catch(error)
        {
         console.log("Timeout in logout action!");
        }
     }
}
module.exports= {BasePage};
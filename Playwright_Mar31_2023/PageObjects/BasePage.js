const menuData = JSON.parse(JSON.stringify(require('../Utils/TestData/MenuItemsTestData.json')));

class BasePage {
   constructor(_page) {
      this.menuItemsContainer = _page.locator("ul.navbar-nav li:not([class='divider'])");
      this.resourceManagementMenuItem = _page.locator("//a[contains(text(), 'Resource Management')]");
      this.MyTimesheetsMenuItem = _page.locator("//a[contains(text(), 'My Timesheets')]");
      this.MyTasksMenuItem = _page.locator("//a[contains(text(), 'My Tasks')]");
      this.MyAccountMenuItem = _page.locator("//a[@href= '/account/edit']");
      this.NotificationsMenuItem = _page.locator("//a[@href= '/notifications/edit']");
      this.automationResourceManagerMenuItem = _page.locator("//span[contains(text(), 'Automation, ResourceManager')]");
      this.logOutMenuItem = _page.locator("#logout");
   }

   async goToLogOut() {
      await this.automationResourceManagerMenuItem.click();
      await this.logOutMenuItem.click();
   }

   async goToResourceManagement() {
      await this.resourceManagementMenuItem.click();
   }

   async goToMyTimesheets() {
      await this.MyTimesheetsMenuItem.click();
   }

   async goToMyTasks() {
      await this.MyTasksMenuItem.click();
   }

   async goToMyAccount() {
      await this.automationResourceManagerMenuItem.click();
      await this.MyAccountMenuItem.click();
   }

   async goToNotifications() {
      await this.automationResourceManagerMenuItem.click();
      await this.NotificationsMenuItem.click();
   }

   async isExpectedMenuDisplayed() {
      const expectedMenuItems = menuData[0].menuItemsList;
      const originalTitles = await this.menuItemsContainer.allInnerTexts();

      const currentMenuItems = originalTitles.map(element => {
         return element.trim();
      });

      return expectedMenuItems.length === currentMenuItems.length &&
         expectedMenuItems.every((title, i) => title === currentMenuItems[i]);
   }
}
module.exports = { BasePage };
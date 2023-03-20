const{test, expect}= require('@playwright/test');

class LoginPage
{
    constructor(page)
    {
        this.page= page;
        this.userNameTextbox= page.locator("#user-name");
        this.passwordTextbox= page.locator("#password");
        this.loginButton= page.locator("[type='submit']");
        this.invalidUserMessage= page.locator("//h3[contains(text(), 'Epic sadface: Username and password do not match any user in this service')]");
        this.lockedUserMessage= page.locator("//h3[contains(text(), 'Epic sadface: Sorry, this user has been locked out.')]");
        this.dashboardMessage= page.locator("//span[contains(text(), 'Products')]");
    }

    // ***************** Invalid User *****************
    async gotoPage()
    {
        await this.page.goto("https://www.saucedemo.com/");
    }

    async enterInvalidCredentials(username_, password_)
    {
        await this.userNameTextbox.type(username_);
        await this.passwordTextbox.type(password_);
    }

    async validateInvalidUserMessage(invalidUserMessage_)
    {
        await this.loginButton.click();
        await expect(this.invalidUserMessage).toHaveText(invalidUserMessage_);
    }

    // ***************** Locked User *****************
    async enterLockedCredentials(username_, password_)
    {
        await this.userNameTextbox.type(username_);
        await this.passwordTextbox.type(password_);
    }
    async validateLockedUserMessage(lockedUserMessage_)
    {
        await this.loginButton.click();
        await expect(this.lockedUserMessage).toHaveText(lockedUserMessage_);
    }

    // ***************** Valid User *****************
    async entervalidCredentials(username_, password_)
    {
        await this.userNameTextbox.type(username_);
        await this.passwordTextbox.type(password_);
    }
    async validateDashboardMessage(dashboardMessage_)
    {
        await this.loginButton.click();
        await expect(this.dashboardMessage).toHaveText(dashboardMessage_);
    }
}
module.exports= {LoginPage};
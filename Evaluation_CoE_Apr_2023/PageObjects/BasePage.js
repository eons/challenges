class BasePage
{
    constructor(_page)
    {
        this.page= _page;
        this.logoIcon= _page.locator("//p[contains(text(), 'Automation Practice')]");
        this.homeMenuItem= _page.locator(".fa-home");
        this.ordersMenuItem= _page.locator(".fa-handshake-o");
        this.cartMenuItem= _page.locator("button[routerlink= '/dashboard/cart']");
        this.signoutMenuItem= _page.locator(".fa-sign-out");
    }

    async getSignOut()
    {
        await this.signoutMenuItem.click();
    }

    async gotoCartPage()
    {
        await this.cartMenuItem.click();
    }
}
module.exports= {BasePage};
const {BasePage}= require('../PageObjects/BasePage');

class CartPage extends BasePage
{
    constructor(_page)
    {
        super(_page);
        this.page= _page;
        this.continueShoppingButton= _page.locator("//button[contains(text(), 'Continue Shopping')]");
        this.buyNowButton= _page.locator("//button[contains(text(), 'Buy Now')]");
        this.deleteItemButton= _page.locator(".fa-trash-o");
        this.checkoutButton= _page.locator("//button[contains(text(), 'Checkout')]");
        this.listOfProducts= _page.locator("li.items");
    }

    async verifyProductIsDisplayed(_productName)
    {
        await this.listOfProducts.waitFor();
        return await this.getProductLocator(_productName).isVisible();
    }

    getProductLocator(_productName)
    {
        return this.page.locator("h3:has-text('"+_productName+"')");
    }

    async clickCheckoutButton()
    {
        await this.checkoutButton.click();
    }

}
module.exports= {CartPage};
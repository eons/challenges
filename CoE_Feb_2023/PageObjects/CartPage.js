const {test, expect}= require('@playwright/test');

class CartPage
{
    constructor(page)
    {
        this.page= page;
        this.listOfProducts= page.locator(".cart_item_label");
        this.checkoutButton= page.locator("#checkout");
    }

    async verifyProductIsDisplayed(productName_)
    {
        await this.listOfProducts.waitFor();
        const isItVisible= await this.getproductLocator(productName_).isVisible();
        expect(isItVisible).toBeTruthy();

        const countProducts= await this.listOfProducts.count();

        for(let i=0; i < countProducts; ++i)
        {
            if(await this.listOfProducts.nth(i).locator("a").textContent() !== productName_)
            await this.listOfProducts.nth(i).locator("button").click();
        }
    }

    getproductLocator(productName_)
    {
        return this.page.locator("//div[contains(text(), '"+ productName_ +"')]");
    }

    async clickOnCheckoutButton()
    {
        await this.checkoutButton.click();
    }
}
module.exports= {CartPage};
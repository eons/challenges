class DashboardPage
{
    constructor(page)
    {
        this.listOfProducts= page.locator(".inventory_item");
        this.cartIconButton= page.locator(".shopping_cart_link");
    }

    async searchProductAddCart(productname_)
    {
        const countProducts= await this.listOfProducts.count();

        for(let i= 0; i < countProducts; ++i)
        {
            if(await this.listOfProducts.nth(i).locator(".inventory_item_name").textContent() === productname_)
            {
                await this.listOfProducts.nth(i).locator("button").click();
                break;
            }
        }
    }

    async navigateToCartPAge()
    {
        await this.cartIconButton.click();
    }
}
module.exports= {DashboardPage};
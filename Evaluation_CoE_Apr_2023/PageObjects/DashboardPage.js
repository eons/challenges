const {BasePage}= require('./BasePage');

class DashboardPage extends BasePage
{
    constructor(_page)
    {
        super(_page);
        this.productsContainer= _page.locator("div.card-body");
    }

    async searchProductAddCart(_productName)
    {
        await this.productsContainer.last().waitFor();

        for(let i=0; i< await this.productsContainer.count(); ++i)
        {
            if(await this.productsContainer.nth(i).locator("b").textContent() === _productName)
            {
                await this.productsContainer.nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }
}
module.exports= {DashboardPage};
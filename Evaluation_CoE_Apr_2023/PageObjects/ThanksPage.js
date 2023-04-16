const {expect}= require('@playwright/test');
const { BasePage } = require('./BasePage');

class ThanksPage extends BasePage
{
    constructor(_page)
    {
        super(_page);
        this.page= _page;
        this.thanksLetter= _page.locator(".hero-primary");
        this.orderIdContainer= _page.locator("tbody .ng-star-inserted .em-spacer-1");
        this.ordersHistoryPageHyperlink= _page.locator(".em-spacer-1 [routerlink= '/dashboard/myorders']");
        this.csvOrderDetailsButton= _page.locator("//button[contains(text(), 'Click To Download Order Details in CSV')]");
    }

    async getOrderIds()
    {
        await expect(this.thanksLetter).toHaveText(" Thankyou for the order. ");
        //let listOfOrderIds= [];
            //await this.orderIdContainer.textContent();
    }

    async downloadCSVOrderDetails()
    {
        // Start waiting for download before clicking. Note no await.
        const downloadPromise = this.page.waitForEvent('download');
        //await this.page.getByText('Download file').click();
        await this.csvOrderDetailsButton.click();
        const download = await downloadPromise;
        await download.suggestedFilename();
        await download.saveAs('C:/Users/josue/Downloads/EvaluationCSV/order-invoice_eons.csv');
        // Wait for the download process to complete
        console.log(await download.path());
        // Save downloaded file somewhere
        
        
    }
}
module.exports= {ThanksPage};
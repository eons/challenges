class OrderOverviewPage
{
    constructor(page)
    {
        this.paymentInformation= page.locator("").first();
        this.finishButton= page.locator("#finish");
    }

    getPaymentInformation()
    {
        return this.paymentInformation.textContent();
    }

    async completeOrder()
    {
        this.finishButton.click();
    }
}
module.exports= {OrderOverviewPage};
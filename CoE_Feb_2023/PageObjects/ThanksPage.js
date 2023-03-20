const {test, expect}= require('@playwright/test');

class ThanksPage
{
    constructor(page)
    {
        this.confirmationLetter= page.locator("//div[contains(text(), 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')]");
    }

    async validateOrderCompletion(completionLetter_)
    {
        const letter= await this.confirmationLetter.textContent();
        expect(completionLetter_.includes(letter)).toBeTruthy();
    }
}
module.exports= {ThanksPage};
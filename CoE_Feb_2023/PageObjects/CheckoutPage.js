class CheckoutPage
{
    constructor(page)
    {
        this.firstNameTextbox= page.locator("#first-name");
        this.lastNameTextbox= page.locator("#last-name");
        this.postalCodeTextbox= page.locator("#postal-code");
        this.continueButton= page.locator("#continue");
    }

    async filloutCheckouForm(firstname_, lastname_, postalcode_)
    {
        await this.firstNameTextbox.type(firstname_);
        await this.lastNameTextbox.type(lastname_);
        await this.postalCodeTextbox.type(postalcode_);
    }

    async clickOnContinue()
    {
        await this.continueButton.click();
    }
}
module.exports= {CheckoutPage};
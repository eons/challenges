const {expect}= require('@playwright/test');
const { BasePage } = require("./BasePage");

class CheckoutPage extends BasePage
{
    constructor(_page)
    {
        super(_page);
        //this.page= _page;
        //this.creditCardTab= _page.locator(".icon.icon-credit-card");
        //this.paypalTab= _page.locator(".icon.icon-paypal");
        //this.sepaTab= _page.locator(".icon.icon-wallet");
        //this.invoiceTab= _page.locator(".icon.icon-note");
        //this.creditCardNumberTextbox= _page.locator("[value= '4542 9931 9292 2293']");
        //this.expiryDateMounthSelectDropdown= _page.locator(".input.ddl").first();
        //this.expiryDateDaySelectDropdown= _page.locator(".input.ddl").nth(1);
        this.cvvCodeTextbox= _page.locator("input.input.txt").nth(1);
        this.nameOnCardTextbox= _page.locator("input.input.txt").nth(2);
        this.applyCouponTextbox= _page.locator("input.input.txt").nth(3);
        this.applyCouponButton= _page.locator("//button[contains(text(), 'Apply Coupon')]");
        //this.userNameTextbox= _page.locator("input.txt.text-validated.ng-untouched.ng-pristine.ng-valid");
        this.selectCountryDropdown= _page.locator("[placeholder= 'Select Country']");
        this.countriesContainer= _page.locator(".ta-results");
        this.singleCountry= _page.locator("button");
        this.placeOrderButton= _page.locator("//a[contains(text(),'Place Order')]");
        this.enterFullShippingMessage= _page.locator("[aria-label= 'Please Enter Full Shipping Information']");
        
    }

    async validateMandatoryFields(_cvvCode, _nameOnCard, _applyCoupon, _country)
    {
        let flag= await this.isAlertMessageVisible(true); expect(flag).toBeTruthy();
        
        await this.cvvCodeTextbox.type(_cvvCode);
        flag= await this.isAlertMessageVisible(true); expect(flag).toBeTruthy();

        await this.nameOnCardTextbox.type(_nameOnCard); 
        flag= await this.isAlertMessageVisible(true); expect(flag).toBeTruthy();

        await this.applyCouponTextbox.type(_applyCoupon);
        flag= await this.isAlertMessageVisible(true); expect(flag).toBeTruthy();

        const country= await this.selctCoutry(_country);
        flag= await this.isAlertMessageVisible(false); expect(flag).toBeFalsy();
    }

    async isAlertMessageVisible(_expectedFlag)
    {
        //await this.placeOrderButton.waitFor();
        await this.placeOrderButton.click();
        

        if(_expectedFlag === true)
        {
            console.log("are you there 1");

            if(await this.enterFullShippingMessage.isVisible())
            {
                await this.enterFullShippingMessage.waitFor();
                await this.enterFullShippingMessage.click();
                await this.enterFullShippingMessage.waitFor({state:'hidden'});
                return true;
            }else{
                console.log("Eter Full Shipping Message not found")
                return false;
            }
            return true;
        }else{
            return this.enterFullShippingMessage.isVisible();
        }   
    }

    async selctCoutry(_country)
    {
        await this.selectCountryDropdown.type(_country, {delay:250});
        const listOfCountries= this.countriesContainer;
        await listOfCountries.waitFor();
        const countriesInDropdown= await this.singleCountry.count();
    
        for(let i=0; i<countriesInDropdown; ++i)
            {
                let textInDropdown= await listOfCountries.locator("button").nth(i).textContent();
                if(textInDropdown === " " + _country)
                {
                    await listOfCountries.locator("button").nth(i).click();
                    break;
                }
             }
    }
}
module.exports= {CheckoutPage};
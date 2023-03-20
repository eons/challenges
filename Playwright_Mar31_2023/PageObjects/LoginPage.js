const {test}= require('@playwright/test');

class LoginPage
{
    constructor(_page)
    {
        this.page= _page;
        
    }
}
module.exports= {LoginPage};
const {test, expect}= require('@playwright/test');
const {BasePage}= require('./BasePage');

class DashboardPage extends BasePage
{
    constructor(_page)
    {
        super(_page); 
    }
}
module.exports= {DashboardPage};
const {LoginPage}= require('./LoginPage');
const {DashboardPage}= require('./DashboardPage');
const {CartPage}= require('./CartPage');
const {CheckoutPage}= require('./CheckoutPage');
const {OrderOverviewPage}= require('./OrderOverviewPage');
const {ThanksPage}= require('./ThanksPage');

class POManager
{
    constructor(page)
    {
        this.page= page;
        this.loginPage= new LoginPage(this.page);
        this.dashboardPage= new DashboardPage(this.page);
        this.cartPage= new CartPage(this.page);
        this.checkoutPage= new CheckoutPage(this.page);
        this.orderOverviewPage= new OrderOverviewPage(this.page);
        this.thanksPage= new ThanksPage(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getDashboardPage()
    {
        return this.dashboardPage;
    }

    getCartPage()
    {
        return this.cartPage;
    }

    getCheckoutPage()
    {
        return this.checkoutPage;
    }

    getOrderOverviewPage()
    {
        return this.orderOverviewPage;
    }

    getThanksPage()
    {
        return this.thanksPage;
    }
}
module.exports= {POManager};
const {DashboardPage} = require('./DashboardPage');
const {LoginPage}= require('./LoginPage');
const {CartPage}= require('../PageObjects/CartPage');
const {CheckoutPage}= require('./CheckoutPage');
const {ThanksPage}= require('./ThanksPage');
const {OrdersPage}= require('./OrdersPage');

class POManager
{
    constructor(_page)
    {
        this.loginPage= new LoginPage(_page);
        this.dashboardPage= new DashboardPage(_page);
        this.cartPage= new CartPage(_page);
        this.checkoutPage= new CheckoutPage(_page);
        this.thanksPage= new ThanksPage(_page);
        this.ordersPage= new OrdersPage(_page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getDasboardPage()
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

    getThanksPage()
    {
        return this.thanksPage;
    }

    getOrdersPage()
    {
        return this.OrdersPage;
    }
}
module.exports= {POManager};
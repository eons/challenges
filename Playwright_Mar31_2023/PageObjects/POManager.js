const {LoginPage}= require('./LoginPage');
const {DashboardPage}= require('./DashboardPage');
const {MyTimesheetsPage}= require('./MyTimesheetsPage');
const {MyTasksPage}= require('./MyTasksPage');
const {MyAccountPage}= require('./MyAccountPage');
const {NotificationsPage}= require('./NotificationsPage');


class POManager
{
    constructor(_page)
    {
        this.page= _page;
        this.loginPage= new LoginPage(this.page);
        this.DashboardPage= new DashboardPage(this.page);
        this.MyTimesheetsPage= new MyTimesheetsPage(this.page);
        this.MyTasksPage= new MyTasksPage(this.page);
        this.MyaccountPage= new MyAccountPage(this.page);
        this.NotificationsPage= new NotificationsPage(this.page);
    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getDashboardPage()
    {
        return this.DashboardPage;
    }

    getMyTimesheetsPage()
    {
        return this.MyTimesheetsPage;
    }

    getMyTasksPage()
    {
        return this.MyTasksPage;
    }

    getMyAccountPage()
    {
        return this.MyaccountPage;
    }

    getNotificationsPage()
    {
        return this.NotificationsPage;
    }
}
module.exports= {POManager};
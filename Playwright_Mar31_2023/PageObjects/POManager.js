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
        this.loginPage= new LoginPage(_page);
        this.DashboardPage= new DashboardPage(_page);
        this.MyTimesheetsPage= new MyTimesheetsPage(_page);
        this.MyTasksPage= new MyTasksPage(_page);
        this.MyaccountPage= new MyAccountPage(_page);
        this.NotificationsPage= new NotificationsPage(_page);
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
const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');
const { MyTimesheetsPage } = require('./MyTimesheetsPage');
const { MyTasksPage } = require('./MyTasksPage');
const { MyAccountPage } = require('./MyAccountPage');
const { NotificationsPage } = require('./NotificationsPage');

class POManager {
    constructor(_page) {
        this.loginPage = new LoginPage(_page);
        this.dashboardPage = new DashboardPage(_page);
        this.myTimesheetsPage = new MyTimesheetsPage(_page);
        this.myTasksPage = new MyTasksPage(_page);
        this.myAccountPage = new MyAccountPage(_page);
        this.notificationsPage = new NotificationsPage(_page);
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }

    getMyTimesheetsPage() {
        return this.myTimesheetsPage;
    }

    getMyTasksPage() {
        return this.myTasksPage;
    }

    getMyAccountPage() {
        return this.myAccountPage;
    }

    getNotificationsPage() {
        return this.notificationsPage;
    }
}
module.exports = { POManager };
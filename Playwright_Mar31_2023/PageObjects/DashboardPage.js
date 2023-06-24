const { BasePage } = require('./BasePage');

class DashboardPage extends BasePage {
    constructor(_page) {
        super(_page);
        this.pageTitleElement = _page.locator(".big-title");
    }

    getPageTitle() {
        return this.pageTitleElement;
    }
}
module.exports = { DashboardPage }
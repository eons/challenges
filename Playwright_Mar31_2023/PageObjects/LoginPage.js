class LoginPage {
    constructor(_page) {
        this.page = _page;
        this.userNameTextbox = _page.locator("#username");
        this.passwordTextbox = _page.locator("#password");
        this.loginButton = _page.locator(".btn-sm[type= 'submit']");
    }

    async goToPage() {
        await this.page.goto("https://focalpointqa.nearshoretechnology.com/login");
    }

    async login(_userName, _password) {
        await this.userNameTextbox.type(_userName);
        await this.passwordTextbox.type(_password);
        await this.loginButton.click();
    }
}
module.exports = { LoginPage };
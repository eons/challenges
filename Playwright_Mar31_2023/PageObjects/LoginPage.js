class LoginPage
{
    constructor(_page)
    {
        this.page= _page;
        this.usernameTextbox= _page.locator("#username");
        this.passwordTextbox= _page.locator("#password");
        this.loginButton= _page.locator(".btn-sm[type= 'submit']");
        this.validLetter= _page.locator(".big-title");
        //this.invalidLetter= _page.locator("[role= 'alert']"); // only happy path
    }

    async goToPage()
    {
        await this.page.goto("https://focalpointqa.nearshoretechnology.com/login");
    }

    async Login(_userName, _password)
    {
        await this.usernameTextbox.type(_userName);
        await this.passwordTextbox.type(_password);
        await this.loginButton.click();
    }
}
module.exports= {LoginPage};
class LoginPage
{
    constructor(_page)
    {
        this.page= _page;
        this.facebookIcon= _page.locator(".fa-facebook");
        this.instagramIcon= _page.locator(".fa-instagram");
        this.twitterIcon= _page.locator(".fa-twitter");
        this.youtubeIcon= _page.locator(".fa-youtube");
        this.notFoundPage= _page.locator("//div[contains(text(), 'Not Found')]");
        this.registerButton= _page.locator("a.btn1");
        this.firstNameTextbox= _page.locator("#firstName");
        this.lastNameTextbox= _page.locator("#lastName");
        this.userEmailTextbox= _page.locator("#userEmail");
        this.userMobileTextbox= _page.locator("#userMobile");
        this.ocuppationDropdown= _page.locator("select.custom-select");
        this.genderRadioButtonMale= _page.locator("[value= 'Male']");
        this.genderRadioButtonFemale= _page.locator("[value= 'Female']");
        this.passwordTextbox= _page.locator("#userPassword");
        this.confirmPasswordTextbox= _page.locator("#confirmPassword");
        this.olderThan18YearsCheckbox= _page.locator("[type= 'checkbox']");;
        this.registerSubmitButton= _page.locator("[type= 'submit']");
        this.accountCreatedSuccessfully= _page.locator("h1.headcolor");
        this.loginButton= _page.locator("#login");
    }

    async goToPage()
    {
        await this.page.goto("https://rahulshettyacademy.com/client/");
    }
    async isSocialMediaIconRedirected(_socialMedia)
    {
        switch(_socialMedia)
        {
            case 'Facebook': 
                    await this.facebookIcon.click(); 
                    return !this.notFoundPage.isVisible();
            case 'Instagram':
                    await this.instagramIcon.click(); 
                    return !this.notFoundPage.isVisible();
            case 'Twitter':
                    await this.twitterIcon.click(); 
                    return !this.notFoundPage.isVisible();
            case 'Youtube':
                    await this.youtubeIcon.click(); 
                    return !this.notFoundPage.isVisible();
            default:
                    console.log("please verify"); 
                    return false;
        }
        // if(_socialMedia === "Facebook"){await this.facebookIcon.click();} 
        // else if(_socialMedia === "Instagram"){await this.instagramIcon.click();} 
        // else if(_socialMedia === "Twitter"){await this.twitterIcon.click();}
        // else if(_socialMedia === "Youtube"){await this.youtubeIcon.click();}
    }

    async isAccountCreatedSuccessfully(_firstName, _lastName, _occupation,
        _gender, _password, _is18YearsOrOlder)
    {
        const phoneNumber= "1234567890";
        const email= "MytestCoE" + Math.floor(Math.random() * 9999) + "@test.com";
        const occupationOp= this.ocuppationDropdown;

        await this.registerButton.click();
        await this.firstNameTextbox.type(_firstName);
        await this.lastNameTextbox.type(_lastName);
        await this.userEmailTextbox.type(email);
        await this.userMobileTextbox.type(phoneNumber);
        await occupationOp.selectOption(_occupation);
        
        if(await _gender === "Male")
        {
            await this.genderRadioButtonMale.click();
        }else{
            await this.genderRadioButtonFemale.click();
        }

        await this.passwordTextbox.type(_password);
        await this.confirmPasswordTextbox.type(_password);

        if(await _is18YearsOrOlder === "true")
        {
            await this.olderThan18YearsCheckbox.click();
            await this.registerSubmitButton.click();
            await this.accountCreatedSuccessfully.waitFor();
            return await this.accountCreatedSuccessfully.isVisible();
        }else{
            await this.registerSubmitButton.click();
            return await this.accountCreatedSuccessfully.isVisible();
        }
    }

    async getLogin(_userName, _password)
    {
        await this.userEmailTextbox.type(_userName);
        await this.passwordTextbox.type(_password);
        await this.loginButton.click();
    }
}
module.exports= {LoginPage};
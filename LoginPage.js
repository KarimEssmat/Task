class LoginPage {
    constructor(driver) {
      this.driver = driver;
  
      // Locators
      this.settingsButton = '~open menu';
      this.usernameField = '~Username input field';
      this.passwordField = '~Password input field';
      this.loginChoice = '//*[@text="Log In"]';
      this.loginButton = '~Login button';
      this.logoutButton = '//*[@text="Log Out"]';
    }
  
    // Actions
    async openSettings() {
      const buttonElement = await this.driver.$(this.settingsButton);
      await buttonElement.click();
    }
  
    async clickLoginChoice() {
      const loginButtonElement = await this.driver.$(this.loginChoice);
      await loginButtonElement.click();
    }
  
    async enterUsername(username) {
      const usernameElement = await this.driver.$(this.usernameField);
      await usernameElement.setValue(username);
    }
  
    async enterPassword(password) {
      const passwordElement = await this.driver.$(this.passwordField);
      await passwordElement.setValue(password);
    }
  
    async clickLoginButton() {
      const loginButtonElement = await this.driver.$(this.loginButton);
      await loginButtonElement.click();
    }
  
    async clickLogoutButton() {
      const logoutButtonElement = await this.driver.$(this.logoutButton);
      await logoutButtonElement.click();
    }
  }
  
  module.exports = LoginPage;
  
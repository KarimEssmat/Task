class DashboardPage {
    constructor(driver) {
      this.driver = driver;
  
      // Locators
      this.dashboardElement = '~container header';
      this.lockedMessage = '//*[@text="Sorry, this user has been locked out."]';
      this.passwordRequiredMessage = '//*[@text="Password is required"]';
      this.usernameRequiredMessage = '//*[@text="Username is required"]';
      this.wrongCredentialsMessage ='//*[@text="Provided credentials do not match any user in this service."]';
    }
  
    // Methods to verify elements
    async isDashboardDisplayed() {
      const dashboard = await this.driver.$(this.dashboardElement);
      return await dashboard.isDisplayed();
    }
  
    async isErrorMessageDisplayed() {
      const lockedMessage = await this.driver.$(this.lockedMessage);
      return await lockedMessage.isDisplayed();
    }
  
    async isPasswordMessageDisplayed() {
      const passwordMessage = await this.driver.$(this.passwordRequiredMessage);
      return await passwordMessage.isDisplayed();
    }
  
    async isUsernameMessageDisplayed() {
      const usernameMessage = await this.driver.$(this.usernameRequiredMessage);
      return await usernameMessage.isDisplayed();
    }
  
    async isWrongCredentialsMessageDisplayed() {
      const wrongCredentials = await this.driver.$(this.wrongCredentialsMessage);
      return await wrongCredentials.isDisplayed();
    }
  }
  
  module.exports = DashboardPage;
  
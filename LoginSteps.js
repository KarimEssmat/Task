const { Given, When, Then, After } = require('@cucumber/cucumber');
const assert = require('chai').assert;
const DriverManager = require('../utilities/DriverManager');
const LoginPage = require('../pages/LoginPage');
const DashboardPage = require('../pages/DashboardPage');

let driver;
let loginPage;
let dashboardPage;

Given('the app is launched', async function () {
  driver = await DriverManager.initializeDriver(process.env.PLATFORM);
  loginPage = new LoginPage(driver);
  dashboardPage = new DashboardPage(driver);
});

When('the user navigates to the login screen', async function () {
  await loginPage.openSettings();
  await driver.pause(3000); // Sleep for 3 seconds
  await loginPage.clickLoginChoice();
  await driver.pause(3000); // Sleep for 3 seconds
});

When('the user enters username {string} and password {string}', async function (username, password) {
  await loginPage.enterUsername(username);
  await driver.pause(3000); // Sleep for 3 seconds
  await loginPage.enterPassword(password);
  await driver.pause(3000); // Sleep for 3 seconds
});

When('the user clicks the login button', async function () {
  await loginPage.clickLoginButton();
  await driver.pause(3000); // Sleep for 3 seconds
});

Then('the login is successful', async function () {
  await driver.pause(3000); // Sleep for 3 seconds
  const isDashboardVisible = await dashboardPage.isDashboardDisplayed();
  assert.isTrue(isDashboardVisible, 'Dashboard should be visible after successful login');
});

Then('Locked Out Message', async function () {
  await driver.pause(3000); // Sleep for 3 seconds
  const isErrorVisible = await dashboardPage.isErrorMessageDisplayed();
  assert.isTrue(isErrorVisible, 'Expected locked-out error message to be displayed');
});

Then('Password is required Message', async function () {
  await driver.pause(3000); // Sleep for 3 seconds
  const isPasswordMessageVisible = await dashboardPage.isPasswordMessageDisplayed();
  assert.isTrue(isPasswordMessageVisible, 'Expected password-required error message to be displayed');
});

Then('Username is required Message', async function () {
  await driver.pause(3000); // Sleep for 3 seconds
  const isUsernameMessageVisible = await dashboardPage.isUsernameMessageDisplayed();
  assert.isTrue(isUsernameMessageVisible, 'Expected username-required error message to be displayed');
});

Then('Wrong Cred', async function () {
  await driver.pause(3000); // Sleep for 3 seconds
  const isWrongCredVisible = await dashboardPage.isWrongCredentialsMessageDisplayed();
  assert.isTrue(isWrongCredVisible, 'Expected wrong-credentials error message to be displayed');
});

After(async function () {
  if (driver) {
    await DriverManager.quitDriver();
  }
});

const { join } = require('path');
const { execSync } = require('child_process');

exports.config = {
  runner: 'local',
  specs: ['./features/**/*.feature'], // Path to feature files
  exclude: [],
  maxInstances: 1,

  // Device configurations for Android and iOS
  capabilities: [
    {
      platformName: 'Android',
      'appium:deviceName': 'emulator-5554',
      'appium:platformVersion': '15.0',
      'appium:automationName': 'UiAutomator2',
      'appium:app': join(process.cwd(), './apps/Android-MyDemoAppRN.1.3.0.build-244.apk'), // Update APK path
    },
    {
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 14',
      'appium:platformVersion': '16.0',
      'appium:automationName': 'XCUITest',
      'appium:app': join(process.cwd(), './apps/iOS-Simulator-MyRNDemoApp.1.3.0-162'), // Update IPA path
    },
  ],

  framework: 'cucumber',

  // Add reporters
  reporters: [
    'spec', 
    [
      'allure', 
      {
        outputDir: './reports/allure-results', 
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  // Services configuration
  services: ['appium'],

  cucumberOpts: {
    require: ['./MY-JS_PROJECT/LoginSteps.js'], // 
    format: ['pretty'], 
    timeout: 60000, 
  },

  onPrepare: function () {
    console.log('Starting the test run...');
  },

  afterStep: async function (test, scenario, { error }) {
    if (error) {
      // Take a screenshot on failure
      await browser.takeScreenshot();
    }
  },

  onComplete: function () {
    console.log('Generating Allure Report...');
    execSync('npx allure generate ./reports/allure-results --clean', { stdio: 'inherit' });
    console.log('Allure Report generated.');
  },
};

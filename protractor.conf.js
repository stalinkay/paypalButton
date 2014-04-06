exports.config = {
  // do not start a Selenium Standalone sever - only run this using chrome.
  chromeOnly: true,
  chromeDriver: './node_modules/protractor/selenium/chromedriver',
  baseUrl: 'http://localhost:9000',

  // spec patterns are relative to the current working directly when protractor is called
  specs: ['test/e2e/**/*_spec.js'],

  // options to be passed to Jasmine-node
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};

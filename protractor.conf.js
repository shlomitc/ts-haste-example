const port = 3100;

exports.config = {
  framework: 'mocha',
  SELENIUM_PROMISE_MANAGER: false,
  baseUrl: `http://localhost:${port}/`,
  onPrepare() {
    browser.ignoreSynchronization = true;
  }
};
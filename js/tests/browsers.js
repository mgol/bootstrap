/* eslint-env node */
/* eslint-disable camelcase */

const browsers = {
  safariMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'Catalina',
    browser: 'Safari',
    browser_version: 'latest'
  },
  chromeMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'Catalina',
    browser: 'Chrome',
    browser_version: 'latest'
  },
  firefoxMac: {
    base: 'BrowserStack',
    os: 'OS X',
    os_version: 'Catalina',
    browser: 'Firefox',
    browser_version: 'latest'
  },
  edgeWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Edge',
    browser_version: '15'
  },
  ie11Win10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'IE',
    browser_version: '11.0'
  },
  chromeWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Chrome',
    browser_version: 'latest'
  },
  firefoxWin10: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '10',
    browser: 'Firefox',
    browser_version: 'latest'
  },
  ie10Win8: {
    base: 'BrowserStack',
    os: 'Windows',
    os_version: '8',
    browser: 'IE',
    browser_version: '10.0'
  },
  iphone17: {
    base: 'BrowserStack',
    os: 'ios',
    os_version: '26.0',
    device: 'iPhone 17',
    real_mobile: true
  },
  iphone16: {
    base: 'BrowserStack',
    os: 'ios',
    os_version: '18.0',
    device: 'iPhone 16',
    real_mobile: true
  },
  pixel9: {
    base: 'BrowserStack',
    os: 'android',
    os_version: '16.0',
    device: 'Google Pixel 9',
    real_mobile: true
  }
}

const browsersKeys = Object.keys(browsers)

module.exports = {
  browsers,
  browsersKeys
}

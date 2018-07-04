'use strict'

var MINIMUM_SUPPORTED_CHROME_IOS_VERSION = 48

function isOperaMini() {
  return false;
}

function isAndroidFirefox() {
  return false;
}

function getIEVersion() {
  return false;
}

function isIe9() {
  return false;
}

function isHTTPS() {
  return true;
}

function isIos() {
  return false;
}

function isAndroid() {
  return false;
}

function isUnsupportedIosChrome() {
  return false;
}

function supportsPopups() {
  return false;
}

// The Google Search iOS app is technically a webview and doesn't support popups.
function isGoogleSearchApp() {
  return false;
}

function isIosWebview() {
  return false;
}

function isAndroidWebview() {
  return false;
}

module.exports = {
  isOperaMini: isOperaMini,
  isAndroidFirefox: isAndroidFirefox,
  getIEVersion: getIEVersion,
  isIe9: isIe9,
  isHTTPS: isHTTPS,
  isIos: isIos,
  isAndroid: isAndroid,
  isUnsupportedIosChrome: isUnsupportedIosChrome,
  supportsPopups: supportsPopups
}

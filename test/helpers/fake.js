'use strict';

var clientToken, clientTokenWithGraphQL;
var tokenizationKey = 'development_testing_merchant_id';
var constants = require('../../src/lib/constants');
var assign = require('../../src/lib/assign').assign;

function configuration() {
  return {
    gatewayConfiguration: {
      merchantId: 'merchant-id',
      assetsUrl: 'https://assets.braintreegateway.com',
      environment: 'development',
      configUrl: 'https://braintreegateway.com/config',
      clientApiUrl: 'https://braintreegateway.com',
      creditCards: {
        supportedCardTypes: [
          'American Express',
          'Discover',
          'Visa'
        ],
        supportedGateways: [
          {
            name: 'clientApi'
          }
        ]
      },
      applePayWeb: {
        merchantIdentifier: 'com.example.test-merchant-identifier',
        supportedNetworks: ['visa', 'amex', 'mastercard']
      },
      braintreeApi: {
        accessToken: 'fakeToken',
        url: 'https://example.braintree-api.com'
      },
      paypal: {
        assetsUrl: 'https://example.com:9292',
        displayName: 'Name'
      },
      payWithVenmo: {
        accessToken: 'pwv-access-token',
        environment: 'sandbox',
        merchantId: 'pwv-merchant-id'
      },
      analytics: {
        url: 'https://braintreegateway.com/analytics'
      },
      visaCheckout: {
        apikey: 'gwApikey',
        externalClientId: 'gwExternalClientId',
        supportedCardTypes: ['Visa', 'MasterCard', 'Discover', 'American Express']
      }
    },
    analyticsMetadata: {
      sdkVersion: constants.VERSION,
      merchantAppId: 'http://fakeDomain.com',
      sessionId: 'fakeSessionId',
      platform: constants.PLATFORM,
      source: constants.SOURCE,
      integration: constants.INTEGRATION,
      integrationType: constants.INTEGRATION
    },
    authorization: tokenizationKey
  };
}

function client(options) {
  options = options || {};

  return {
    getConfiguration: function () {
      return options.configuration || configuration();
    },
    getVersion: function () {
      return options.version || constants.VERSION;
    }
  };
}

clientToken = configuration().gatewayConfiguration;
clientToken.authorizationFingerprint = 'encoded_auth_fingerprint';

clientTokenWithGraphQL = assign({
  graphQL: {
    url: 'https://localhost/graphql',
    date: '2018-05-08'
  }
}, clientToken);

clientTokenWithGraphQL = btoa(JSON.stringify(clientTokenWithGraphQL));
clientToken = btoa(JSON.stringify(clientToken));

module.exports = {
  tokenizationKey: tokenizationKey,
  clientToken: clientToken,
  clientTokenWithGraphQL: clientTokenWithGraphQL,
  configuration: configuration,
  client: client
};

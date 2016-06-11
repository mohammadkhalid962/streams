// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key: 'MuE1sN1A2BeC1tZkQYGRBKmYN',
    consumer_secret: 'QO8GkAU21iGcG3nQISbtFlBOKJnAarpOxmB8RcQyQ8XhagNXG9',
    access_token_key: '3982315889-E48vQrgFWYQ6CgXGdMr3ti8J94WtXW914jQsK9u',
    access_token_secret: 'PxJb6lYzohIJ7FZjVRLgo3IIud3Zw4XFpIizjwMkJHhzl'
  });

  return client;
};

module.exports = Helpers;

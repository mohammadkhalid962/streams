//HELPERS

//Global dependencies
var Twitter = require('twitter');

var Helpers = {
    
};

Helpers.getTwitterClient = function() {
    // todo: THIS IS SUPER INSECURE
    // move to environment variables
    var client = new Twitter({
  consumer_key: 'MuE1sN1A2BeC1tZkQYGRBKmYN',
  consumer_secret: 'QO8GkAU21iGcG3nQISbtFlBOKJnAarpOxmB8RcQyQ8XhagNXG9',
  access_token_key: '3982315889-E48vQrgFWYQ6CgXGdMr3ti8J94WtXW914jQsK9u',
  access_token_secret: 'PxJb6lYzohIJ7FZjVRLgo3IIud3Zw4XFpIizjwMkJHhzl'
});
return client;
};

module.exports = Helpers;

var Alexa = require('alexa-sdk');

var handlers = {
    'GREETING': function () {
        this.emit(':tell', 'Hello World!');
    }
};

exports.handler = function(event, context, callback) {
      var alexa = Alexa.handler(event, context);
      alexa.appId = process.env.AlexaAppId;
      alexa.registerHandlers(handlers);
      alexa.execute();
  };
  
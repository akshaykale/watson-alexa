
var Alexa = require('alexa-sdk');
var express = require('express');
const app = express();

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
  
// Tell our app to listen on port 
app.listen(process.env.PORT, function () {
  console.log('Node app is running on port', process.env.PORT);
});
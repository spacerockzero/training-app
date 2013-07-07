/**
 * Module dependencies
 */
var woodruff = require("woodruff")
  , shared = require("shared-ui");

/**
 * Expose the app
 */
var app = module.exports = woodruff(__dirname, shared);

app.configure('development', function() {
  var proxy = require("simple-http-proxy");

  app.stack.splice(0, 0, {
    route: "/flickr",
    handle: proxy('http://api.flickr.com')
  });

});

/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  app.import(app.bowerDirectory + '/uikit/js/uikit.min.js');
  app.import(app.bowerDirectory + '/uikit/js/components/slideshow.min.js');
  app.import(app.bowerDirectory + '/uikit/js/components/slideshow-fx.min.js');
  app.import(app.bowerDirectory + '/uikit/css/uikit.almost-flat.min.css');
  app.import(app.bowerDirectory + '/uikit/css/components/slideshow.almost-flat.min.css');
  app.import(app.bowerDirectory + '/uikit/css/components/slidenav.almost-flat.min.css');
  app.import(app.bowerDirectory + '/uikit/css/components/dotnav.almost-flat.min.css');
  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};

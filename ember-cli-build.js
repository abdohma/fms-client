/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css');
  app.import('node_modules/bootstrap/dist/css/bootstrap.min.css.map');
  app.import('node_modules/font-awesome/css/font-awesome.min.css');
  app.import('node_modules/font-awesome/css/font-awesome.css.map');
  app.import('node_modules/ionicons/dist/css/ionicons.min.css');
  app.import('node_modules/ionicons/dist/css/ionicons.min.css.map');
  app.import('node_modules/admin-lte/dist/css/AdminLTE.min.css');
  app.import('node_modules/admin-lte/dist/css/adminlte.min.css.map');
  app.import('node_modules/admin-lte/dist/css/skins/skin-red.min.css');
  app.import('node_modules/jquery/dist/jquery.min.js');
  app.import('node_modules/bootstrap/dist/js/bootstrap.min.js');
  app.import('node_modules/admin-lte/dist/js/adminlte.min.js');

  return app.toTree();
};

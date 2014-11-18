'use strict';

// Move to routing.js
var routing = function($locationProvider, $stateProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
  .state(
    'wall', {
    url: "/wall",
    templateUrl: "components/wall/wallView.html"
  })
 .state(
    'settings', {
    url: "/settings",
    templateUrl: "components/settings/settingsView.html"
  })
};

require('angular');
var uiRoute = require('angular-ui-router');

var app = angular.module('app', ['ui.router']);

// Components
app.controller('WallCtrl', require('./components/wall/wallCtrl'));

app.config(routing)
app.run();



/// <reference path='_all.ts' />

module app {
  'use strict';

  function routing($stateProvider: ng.ui.IStateProvider) {
    $stateProvider.state(
        'wall', {
          url: "/wall",
          templateUrl: "components/wall/wallView.html"
        })
    $stateProvider.state(
        'settings', {
          url: "/settings",
          templateUrl: "components/settings/settingsView.html"
        })
  }

  var app = angular.module('app', ['ui.router']);
  app.config(routing);
  app.controller('WallCtrl', WallCtrl);

  //var todomvc = angular.module('todomvc', [])
  //.controller('todoCtrl', TodoCtrl)
  //.directive('todoBlur', todoBlur)
  //.directive('todoFocus', todoFocus)
  //.service('todoStorage', TodoStorage);
}


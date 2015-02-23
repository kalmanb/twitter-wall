'use strict';
/*jshint esnext: true */

class TestCtrl {
  constructor ($scope) {
    $scope.date = new Date();
  }
}

TestCtrl.$inject = ['$scope'];

export default TestCtrl;

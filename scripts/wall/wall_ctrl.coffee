angular.module('tweetwall').controller 'WallCtrl', ($scope, $location, $q, $timeout, $state, WallService, Utils, WallContext, WallData)->
  # Map our current status to the context that we need to send to the API
  getContext = ->
    context = {}

    context

  # Working data
  $scope.base = null
  $scope.data = null
  $scope.search = {}

  $scope.loading = {
    base: true
  }


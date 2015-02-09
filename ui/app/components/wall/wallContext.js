angular.module('tweetwall').factory('WallContext'), function($location) {
  var service = {};

  service.serializeContext = fuction(context) {
    var result = {};
    return result;
  }

  service.deserializeContext = function (search) {
    var result = {};
    return result;
}

  // Read context from the URL, trying to parse JSON from it
  service.getUrlContext = fuction() {
    service.deserializeContext($location.search() || {});
  }

  service.setUrlContext = fuction (context) {
    $location.search(service.serializeContext(context));
  }

  return service;
}

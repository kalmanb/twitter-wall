angular.module('tweetwall').factory 'WallContext', ($location)->
  service = {}

  service.serializeContext = (context)->
    result = {}

    result

  service.deserializeContext = (search)->
    result = {}

    result

  # Read context from the URL, trying to parse JSON from it
  service.getUrlContext = ->
    service.deserializeContext($location.search() || {})

  service.setUrlContext = (context)->
    $location.search(service.serializeContext(context))

  service

angular.module('tweetwall', ['ngAnimate', 'ngSanitize', 'ui.router', 'angucomplete-alt'])

.config(($locationProvider, $stateProvider, $urlRouterProvider)->
  $locationProvider.hashPrefix('!') 

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('wall', {
      url: '/'
      controller: 'WallCtrl'
      templateUrl: 'templates/wall.html'
    })
)

angular.module('tweetwall_app', ['tweetwall'])

###
.run(($rootScope, $timeout, $state, Authenticated)->
  $rootScope.current = Authenticated.current

  $rootScope.logout = ->
    Authenticated.logout().then ->
      $state.go 'login'
    , (error)->
      console.error error

  $rootScope.$on '$stateChangeStart', (e, to)->
    if not Authenticated.isAuthenticated() && to.name != 'login'
      e.preventDefault()
      $state.go 'login'
    else if to.name == 'login' && Authenticated.isAuthenticated()
      e.preventDefault()
      $state.go 'home'

  $rootScope.$on '$viewContentLoaded', (e)->
    $timeout ->
      input = document.querySelector('.autofocus')
      if input && input.focus
        input.focus()
    , 100
)
###

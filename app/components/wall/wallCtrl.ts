/// <reference path='../../_all.ts' />

module app {
  'use strict';

  // TODO - move this to model
  export class Tweet {
    constructor(
        public text: string
        ) { }
  }

  // TODO - should this be here?
  export interface IWallScope extends ng.IScope {
    tweets: Tweet[];
            location: ng.ILocationService;
                      vm: WallCtrl;
  }

  export class WallCtrl {
    private tweets: Tweet[];
    public static $inject = [
      '$scope',
      '$location'
    ]
    constructor(
        private $scope: IWallScope,
        private $location: ng.ILocationService
        ) {

      this.tweets = [
        new Tweet("one"),
        new Tweet("two")
      ]

      $scope.tweets = this.tweets

    }
  }

}


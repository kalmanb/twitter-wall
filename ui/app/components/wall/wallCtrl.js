'use strict';

module.exports = function($q) {

  var later = $q.defer();
  var self = this;

  later.promise
  .then( () => {
    self.tweets = [
      {"text": "one"},
      {"text": "two"}
    ];
  });

  later.resolve();
};


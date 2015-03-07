angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorten) {
  $scope.link = {};
  $scope.addLink = function(newLink){
    Shorten.addLink(newLink)
      .then(function(res){
        console.log('this is the res from server', res)
      })
  }

});

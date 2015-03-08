angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Shorten) {
  $scope.link = {};
  $scope.addLink = function(newLink){
    console.log(newLink); //works
    Shorten.addLink(newLink)
      .then(function(res){
        console.log('this is the res from server', res)
      $location.path('/links')
      })
  }

});

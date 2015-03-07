angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, Links) {
  $scope.data = {};
  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(links){
        $scope.data.links = links.data;
        console.log($scope.data.links);
    })
  }
  // console.log('scope.getLinks:', $scope.getLinks())
$scope.getLinks();
});




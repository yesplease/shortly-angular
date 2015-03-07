angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, Links) {
  $scope.data = {};
  $scope.dummyLink = 'now it\'s working woo hoo!!';
  $scope.getLinks = function(){
    // console.log(Links.getLinks());
    Links.getLinks()
      .then(function(links){
        $scope.data.links = links.data;
    })
  }
  // console.log('scope.getLinks:', $scope.getLinks())
$scope.getLinks();
});




angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, Links) {
  $scope.dummyLink = 'now it\'s working woo hoo!!';
  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(links){
        $scope.data = links;
        console.log("scope.data", $scope.data);
    })
  }
$scope.getLinks();
});




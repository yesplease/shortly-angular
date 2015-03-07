angular.module('shortly.links', [])

.controller('LinksController', function ($scope, $window, Links) {
  $scope.data = {};
  $scope.dummyLink = 'dummy text';

  $scope.getLinks = function(){
    Links.getLinks()
      .then(function(links){
      console.log("this is inside linksJS", links);
    })
  }
$scope.getLinks();
});




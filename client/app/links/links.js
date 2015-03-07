angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};

  $scope.getLinks = function(){
    Links.getLinks($scope.data)
      .then(function (token){
        console.log('token', token)
      })
  }




  console.log("This is Links: ", Links, new Date);
  // Your code here
  $scope.link = 'http://www.google.com';
});

  $scope.getLinks();

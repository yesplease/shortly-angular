angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(newLink){
    Links.addLink(newLink)
      .then(function(res){
        console.log('this is the res from server', res)
      })
  }

});


//  $scope.dummyLink = 'now it\'s working woo hoo!!';
//   $scope.getLinks = function(){
//     // console.log(Links.getLinks());
//     Links.getLinks()
//       .then(function(links){
//         $scope.data.links = links.data;
//     })
//   }
//   // console.log('scope.getLinks:', $scope.getLinks())
// $scope.getLinks();
// });

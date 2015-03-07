angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // Your code here
  var ourLinks = [];
  var getLinks = function(){
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .catch(function(error){
      console.error(error);
    });

    // .then(function(resp){
    //   ourLinks = resp;
    //   console.log("This is the resp in factory: ", resp);
    // })
  };

  var returnLinks = function(){
    return ourLinks;
  }
  // $http.get('/api/links').
  //   success(function(data, status, headers, config){
  //     console.log("This is the success call from data", data);
  //   })
    // error(fucntion(data, status, headers, config){
    //   console.log("error");
    // })
  return {
    getLinks: getLinks,
    returnLinks: returnLinks
  };
})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});

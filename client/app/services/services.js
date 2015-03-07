angular.module('shortly.services', [])
.factory('Shorten', function ($http){
  var addLink = function(link){

    console.log("This is the link to post to server: ", link)
    return $http({
      method: 'POST',
      url: '/api/links',
      data: {url: link}
    })
    .catch(function(error){
      console.log('error yo', error);
    });
  }
  return {
    addLink: addLink
  };
})
.factory('Links', function ($http) {
  var getLinks = function(){
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .catch(function(error){
      console.error(error);
    });
  };
  var addLink = function(link){
    console.log("This is the link to post to server: ", link);
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    })
    .catch(function(error){
      console.log('error yo', error);
    });
  }

  return {
    getLinks: getLinks
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

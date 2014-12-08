'use strict';

// Declare app level module which depends on views, and components
var treeApp = angular.module('TreeApp', ['ngRoute']);

treeApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
      }).
      when('/boulevard', {
        templateUrl: 'partials/boulevard.html',
        controller: 'ListCtrl'
      }).
      when('/large', {
        templateUrl: 'partials/large.html',
        controller: 'ListCtrl'
      }).
      when('/mid', {
        templateUrl: 'partials/mid.html',
        controller: 'ListCtrl'
      }).
      when('/utility', {
        templateUrl: 'partials/utility.html',
        controller: 'ListCtrl'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);

treeApp.controller('ListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('js/treelist.json').success(function(data) {
      $scope.trees = data;
    });
  }]);


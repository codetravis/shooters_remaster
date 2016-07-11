var app = angular.module('shooter_app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'home.html' })
    .when('/indoor_range', { templateUrl: 'indoor_range.html' })
    .otherwise({ redirectTo: '/' });
}]);

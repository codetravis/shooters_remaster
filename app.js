var app = angular.module('shooter_app', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', { templateUrl: 'home.html' })
    .when('/indoor_range', { templateUrl: 'indoor_range.html' })
    .when('/handguns', { templateUrl: 'handguns.html' })
    .when('/longguns', { templateUrl: 'longguns.html' })
    .when('/range_rules', { templateUrl: 'range_rules.html' })
    .when('/events', { templateUrl: 'events.html' })
    .when('/scores', { templateUrl: 'scores.html' })
    .when('/memberships', { templateUrl: 'memberships.html' })
    .when('/other_services', { templateUrl: 'other_services.html' })
    .when('/shooting_classes', { templateUrl: 'shooting_classes.html' })
    .when('/reloading', { templateUrl: 'reloading.html' })
    .when('/transfers', { templateUrl: 'transfers.html' })
    .when('/gun_rentals', { templateUrl: 'gun_rentals.html' })
    .otherwise({ redirectTo: '/' });
}]);

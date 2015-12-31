var app = angular.module("protoInstructions", ['ngRoute', 'ngSanitize']);

app.config(function($routeProvider){

   $routeProvider
       .when('/', {
          templateUrl: 'assets/templates/default.html',
          controller: 'mainController'
       })
       .when('/AngularJS', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'angController'
       })
       .when('/Bootstrap', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'bootstrapController'
       })
       .when('/CSS', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'cssController'
       })
       .when('/HTML', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'htmlController'
       })
       .when('/JavaScript', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'jsController'
       })
       .when('/php', {
          templateUrl: 'assets/templates/lang.html',
          controller: 'phpController'
       })
       .when('/HTML-Fundamentals-1', {
          templateUrl: 'assets/templates/featureSets.html',
          controller: 'htmlFund1Controller',
          controllerAs: 'fs'
       })
       .when('/HTML-Fundamentals-2', {
          templateUrl: 'assets/templates/featureSets.html',
          controller: 'htmlFund2Controller',
          controllerAs: 'fs'
       })
});
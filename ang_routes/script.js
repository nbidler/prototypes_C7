// Create the route module and name it routeApp
var app = angular.module('routeApp', ['ngRoute']);
app.controller('routeCtrl', function($scope){
    $scope.message = "Lorem Squigson";
});
// Config the routes
app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
    .when('/home',{
        templateUrl: 'pages/home.html',
        controller: 'mainCtrl',
        controllerAs:'mc'
    })
    // route for the about page
    .when('/about',{
        templateUrl: 'pages/about.html',
        controller: 'subACtrl'
    })
    // route for the contact page
    .when('/contact',{
        templateUrl: 'pages/contact.html',
        controller: 'subBCtrl'
    })
});

// Create the controllers for the different pages below

// home page controller
    // Create a message to display in the view
app.controller('mainCtrl', function($scope){
    $scope.message = "Home Page 1!";
});

// about page controller
    // Create a message to display in the view
app.controller('subACtrl', function($scope){
    $scope.message = "About Page 2!";
});

// contact page controller
    // Create a message to display in the view
app.controller('subBCtrl', function($scope){
    $scope.message = "Contact Page 3!";
});

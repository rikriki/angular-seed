'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ui.router',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
/*config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'})
  .when("/drivers", {templateUrl: "partials/drivers.html", controller: "driversController"})
  .when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'})
  .when('/drivers/:id',{templateURL:'partials/driver.html',controller:'driverController'})
  .otherwise({redirectTo: '/drivers'});
}]);*/
config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/drivers');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/drivers',
            templateUrl: 'partials/drivers.html',
            controller: "driversController"
        })
        .state('drivers', {
            url: '/drivers/:id',
            templateUrl: 'partials/driver.html',
            controller: "driverController"
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});





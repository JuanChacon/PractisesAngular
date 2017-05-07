var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when('/book_sheet2', {
        templateUrl : 'templates/book_sheet2.html'
    })
        .when('/body', {
        templateUrl : 'templates/Body.html',
        controller: 'controllerData'
       
    }).otherwise({
            redirectTo: '/book_sheet2'
        });
});

                      
 
  


    

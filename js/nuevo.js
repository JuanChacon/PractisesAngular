//(function() {

var app = angular.module('myApp', ['ngRoute']);
app.config('$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/body', {
        templateUrl: 'templates/Body.html',
        controller: 'controllerData'
    }).when('/book', {
        templateUrl: 'templates/book_sheet2.html'
        
    }).otherwise({
        redirectTo: '/body'
        
    }).controller('controllerData',function($scope,$http){
        
        $scope.removeBook = function(book){
    var removeBook = $scope.data.indexOf(book);
     $scope.data.splice(removeBook,1);
 };
        $http.get('public/data.json').then(function(datos){
     
   $scope.data = datos.data;    
     
 });
    });

});



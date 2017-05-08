//(function() {

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
            redirectTo: '/body'
        });
});

(function() {
var dataMovies = angular.module('BookStoreApp', []);

dataMovies.controller('controllerData', function($scope,$http){
 
 //Se agrego esta funcion para borrar algun elemento de la lista, esto en caso de que al administrador le digan que se decean borrar libros   
 $scope.removeBook = function(book){
    var removeBook = $scope.data.indexOf(book);
     $scope.data.splice(removeBook,1);
 };   
                      
 //$scope.importar = function(){

 $http.get('public/data.json').then(function(datos){
     
   $scope.data = datos.data;    
     
 });
     
 //}
 
 //$scope.importar();
                      
});

    
})();



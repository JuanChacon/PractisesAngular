//(function() {

var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/body', {
        templateUrl: 'templates/Body.html',
        controller: 'controllerData'
    }).when('/book', {
        templateUrl: 'templates/book_sheet2.html'
        
    }).otherwise({
        redirectTo: '/body'
    });

}]);



(function() {    
app.controller('controllerData', ['$scope', '$http', function($scope, $http){

//Se agrego esta funcion para borrar algun elemento de la lista, esto en caso de que al administrador le digan que se decean borrar libros   
 $scope.removeBook = function(data){
     var removeBook = $scope.datos.indexOf(data);
     $scope.datos.slice(removeBook,1);
 };
                      
 //$scope.importar = function(){

 $http.get('public/data.json').then(function(datos){
     
   $scope.data = datos.data;    
     
 });
     
 //}
 
 //$scope.importar();
                      
}]);

    
})();



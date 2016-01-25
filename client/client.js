/**
 * Created by ulaeulaeulae on 1/22/16.
 */
var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/address', {
            templateUrl:'views/address.html',
            controller:'addressController'
        })
        .when('/order', {
            templateUrl: 'views/order.html',
            controller: 'orderController'
        })
}]);

app.controller('addressController', ['$scope', function($scope){

}]);

app.controller('orderController', ['$scope', function($scope){

}]);
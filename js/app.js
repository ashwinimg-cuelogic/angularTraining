var myApp = angular.module("myApp", [
    'ngRoute',
    'flightController'
]);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller:'ListController'
    }).
    when('/details/:itemId', {
        templateUrl: 'partials/details.html',
        controller:'DetailsController'
    }).
    when('/user/register', {
        templateUrl:'partials/register.html',
        controller:'RegisterController'
    }).
    when('/user/login', {
        templateUrl:'partials/login.html',
        controller:'LoginController'
    }).
    otherwise({
        redirectTo: "/user/login"
    });
}]);
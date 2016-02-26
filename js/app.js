var myApp = angular.module("myApp", [
    'ngRoute',
    'flightController'
]);

myApp.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(event, previous, error) {
        if (error = 'AUTH_REQUIRED') {
            $rootScope.message = "plz login to access";
            $location.path = "/login";
        }
    });
}])

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/list', {
        templateUrl: 'partials/list.html',
        controller:'ListController',
        resolve:{
            currentAuth: function(Authentication) {
                return Authentication.requireAuth();
            }
        }
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
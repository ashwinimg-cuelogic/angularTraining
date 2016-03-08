//var myApp = angular.module("myApp", [
//    'ngRoute',
//    'flightController'
//]);
//
//myApp.run(['$rootScope', '$location', function($rootScope, $location) {
//    $rootScope.$on('$routeChangeError', function(event, previous, error) {
//        if (error = 'AUTH_REQUIRED') {
//            $rootScope.message = "plz login to access";
//            $location.path = "/login";
//        }
//    });
//}])
//
//myApp.config(['$routeProvider', function($routeProvider) {
//    $routeProvider.
//    when('/list', {
//        templateUrl: 'partials/list.html',
//        controller:'ListController',
//        resolve:{
//            currentAuth: function(Authentication) {
//                return Authentication.requireAuth();
//            }
//        }
//    }).
//    when('/details/:itemId', {
//        templateUrl: 'partials/details.html',
//        controller:'DetailsController'
//    }).
//    when('/user/register', {
//        templateUrl:'partials/register.html',
//        controller:'RegisterController'
//    }).
//    when('/user/login', {
//        templateUrl:'partials/login.html',
//        controller:'LoginController'
//    }).
//    otherwise({
//        redirectTo: "/user/login"
//    });
//}]);


var myApp = angular.module("myApp", [
    'ui.router',
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



myApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("list", {
            url: "/list",
            templateUrl: 'partials/list.html',
            controller: 'ListController',
            resolve: {
                currentAuth: function (Authentication) {
                    return Authentication.requireAuth();
                }
            }
        })
        .state("list_items", {
            url: "/list/:itemId",
            templateUrl: 'partials/details.html',
            controller:'DetailsController'
        })
        .state("user", {
            url: "/users",
            templateUrl: 'partials/users.html'

        })
        .state("user.register", {
            url: "/register",
            templateUrl: 'partials/register.html',
            controller:'RegisterController'
        })
        .state("user.login", {
            url: "/login",
            templateUrl: 'partials/login.html',
            controller:'LoginController'
        });

        $urlRouterProvider.otherwise("/user/login");
}]);
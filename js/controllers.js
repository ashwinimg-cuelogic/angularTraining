var flightController = angular.module("flightController", ['ngAnimate',
    'firebase']).constant('FIREBASE_URL', "https://angulartrainingash.firebaseio.com/");

flightController.controller('ListController', ["$scope", "$http", function($scope, $http){
    $http.get('js/data.json').success(function(data) {
        $scope.flights = data;
        $scope.flightOrder = "number";
    });
}]);

flightController.controller('DetailsController', ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
    $http.get('js/data.json').success(function(data) {
        $scope.flights = data;
        $scope.prevItem = ($routeParams.itemId > 0) ? Number($routeParams.itemId) - 1 : $scope.flights.length - 1;
        $scope.nextItem = ($routeParams.itemId < ($scope.flights.length - 1)) ? Number($routeParams.itemId) + 1 : 0;
        $scope.whichFlight = $routeParams.itemId;
    });
}]);

flightController.controller('RegisterController', ["$scope", "$firebaseAuth", "FIREBASE_URL", function($scope, $firebaseAuth, FIREBASE_URL){
   var ref = new Firebase(FIREBASE_URL);
   var auth = $firebaseAuth(ref);

    $scope.register = function() {
        auth.$createUser({
            email: $scope.user.email,
            password: $scope.user.password
        }).then(function(regUser){
            $scope.message = 'welcome '+ $scope.user.email;
        }).catch(function(err) {
            $scope.message = err.message;
        });
    }
}]);

flightController.controller('LoginController', ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
    $scope.login = function() {
        $scope.message = 'welcome '+ $scope.user.email;
    }
}]);



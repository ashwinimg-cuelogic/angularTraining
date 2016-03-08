var flightController = angular.module("flightController", ['ngAnimate',
    'firebase']).constant('FIREBASE_URL', "https://angulartrainingash.firebaseio.com/");

flightController.controller('ListController', ["$scope", "$http", function($scope, $http){
    $http.get('js/data.json').success(function(data) {
        $scope.flights = data;
        $scope.flightOrder = "number";
    });
}]);

flightController.controller('DetailsController', ["$scope", "$http", "$stateParams", function($scope, $http, $stateParams){
    $http.get('js/data.json').success(function(data) {
        $scope.flights = data;
        $scope.prevItem = ($stateParams.itemId > 0) ? Number($stateParams.itemId) - 1 : $scope.flights.length - 1;
        $scope.nextItem = ($stateParams.itemId < ($scope.flights.length - 1)) ? Number($stateParams.itemId) + 1 : 0;
        $scope.whichFlight = $stateParams.itemId;
    });
}]);

flightController.controller('RegisterController', ["$scope", "Authentication", function($scope, Authentication){

    $scope.register = function() {
        Authentication.register($scope.user);
    }
}]);

flightController.controller('LoginController', ["$scope", "Authentication", function($scope, Authentication){
    $scope.login = function() {
        Authentication.login($scope.user);
    }

    $scope.logout = function() {
        Authentication.logout();
    }
}]);



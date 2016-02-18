var flightController = angular.module("flightController", ['ngAnimate']);

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
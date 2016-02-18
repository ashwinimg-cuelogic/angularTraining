var flightController = angular.module("flightController", []);

flightController.controller('ListController', ["$scope", "$http", function($scope, $http){
    $http.get('js/data.json').success(function(data) {
        $scope.flights = data;
        $scope.flightOrder = "number";
    });
}]);

flightController.controller('DetailsController', ["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
    $http.get('js/data.json').success(function(data) {
        $scope.flights = data;
        $scope.whichFlight = $routeParams.itemId;
    });
}]);
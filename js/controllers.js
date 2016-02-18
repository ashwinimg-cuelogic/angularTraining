var myApp = angular.module("myApp", []);

myApp.controller('MyController', function MyController($scope){
    $scope.artists = [{
        'name' : "ashwini",
        'title': "Senior Software Engineer",
        'company': "Cuelogic"
        },
        {
            'name' : "ashwini1",
            'title': "Senior Software Engineer",
            'company': "Cuelogic"
        },
        {
            'name' : "ash",
            'title': "Senior Software Engineer",
            'company': "Cuelogic"
        }
    ];
});
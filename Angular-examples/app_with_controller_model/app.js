// gloabal name space obj  = angular variable and parameters are name and dependencies
var myApp = angular.module('myApp', []);

//Build a controller
myApp.controller('mainController', function($scope) {

    console.log($scope);
    
    $scope.name = "kiran";
    $scope.occupation = "coder";

    $scope.getname = function() {
        return 'Sai kiran';
    }

    $scope.getname();
    console.log($scope);

});

var myApp = angular.module('myApp',[]);

myApp.controller('mainController',  function($scope){

	$scope.name ="kiran";
	$scope.occupation = "coder";
	$scope.getname =function  () {
		return 'Sai kiran';
	}
	$scope.getname();
	console.log($scope);

});
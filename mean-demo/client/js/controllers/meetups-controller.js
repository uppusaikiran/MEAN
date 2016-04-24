var app = angular.module('app', []);
app.controller('meetupsController', meetupsController);



function meetupsController ($scope) {
	// $scope.meetupsCount = 10;

	$scope.meetups = [
 		{ name : "Meet 1"},
 		{ name : "Meet 2"},
 		{ name : "Meet 3"}
	]
	$scope.createMeetup =  function () {
		$scope.meetups.push({ name : $scope.meetupName});
		$scope.meetupsName = '';
	}
}
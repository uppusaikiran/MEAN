var mainApplicationModuleName = 'mean';
 
var mainApplicationModule = angular.module(mainApplicationModuleName, []);
 
// Bind a function to the document ready event and use bootstrap to start
// a new AngularJS app using the main module
angular.element(document)ready(function() {
angular.bootstrap(document,
[mainApplicationModuleName]);
});
var app = angular.module('hour', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/tutorial', {
		templateUrl: '../views/tutorial.htm'
	})
	.when('/resources', {
		templateUrl: '../views/resources.htm'
	});
});
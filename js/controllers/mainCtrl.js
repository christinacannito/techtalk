app.controller('mainCtrl', function($scope){
	$scope.show = false;
	$scope.tut = false;
	$scope.res = false;
	$scope.showDivs = function() {
		$scope.show = true;
	}
	$scope.showTutorial = function() {
		$scope.tut = true;
	}
	$scope.showResources = function() {
		$scope.res = true;
	}
})
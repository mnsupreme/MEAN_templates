app.controller('ControllerNames(plural-capital naming convention)', ["$scope", 'friendFactory', '$routeParams', '$location', function($scope, friendFactory, $routeParams, $location){
		

		$scope.function=Factory.function($routeParams, function(){
			console.log('function successful')
		})

	}])
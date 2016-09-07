app.controller('indexController', ['$scope','friendsFactory','$routeParams', '$location', function($scope, friendsFactory, $routeParams, $location) {
		friendsFactory.index(function(friends){
			$scope.friends = friends;
		})
		$scope.delete = function(id){
			friendsFactory.delete(id, function(){
				friendsFactory.index(function(friends){
				$scope.friends = friends;
				})
			});
		}

}])
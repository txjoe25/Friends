app.controller('editController', ['$scope','friendsFactory','$routeParams','$location', function($scope, friendsFactory, $routeParams,$location) {
  /*
    GET A FRIEND FROM THE FACTORY, This is a one time thing when we load this partial, so we didn't set a variable so we could reuse it, rather, just ran the friendsFactory method directly.
  */

friendsFactory.show($routeParams.id, function(returnedData){
	$scope.friend = returnedData;
	$scope.friendUpdated = {
		name: returnedData.name,
		date: moment(returnedData.birthday).toDate()
	};
});
$scope.min_year = moment().subtract(18, 'years').format('YYYY-MM-DD')
$scope.update = function(id){
	if(Object.keys($scope.myForm.date.$error).length === 0 && Object.keys($scope.myForm.name.$error).length === 0){
		$scope.friendUpdated.birthday = $scope.friendUpdated.date;
	friendsFactory.update(id, $scope.friendUpdated, function(){
	})
	$location.url('/');
};
};
$scope.delete = function(id){
	friendsFactory.delete(id);
	$location.url('/');
};
  /*
    OUR $scope.update function goes here <-- $scope because we need to access this method with ng-submit or ng-click (from the form in the previous assignment).  Want to see all of the friends when we get back including the updated on??  See Index in the previous controller.
  */
}]);
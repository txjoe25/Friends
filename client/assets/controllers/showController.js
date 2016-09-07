app.controller('showController', ['$scope','friendsFactory','$routeParams', function($scope, friendsFactory,$routeParams) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
	friendsFactory.show($routeParams.id, function(data){
		data.birthdayPretty = moment(data.birthday).format('LL');
		$scope.friend = data;
		console.log(data.birthday)
	});
	// friendsFactory.getFriend($routeParams.id, function(data){
	// 	data.birthdayPretty = moment(data.birthday).format('LL');
	// 	$scope.friend = data;
	// 	console.log(data.birthday)
	// });
}]);
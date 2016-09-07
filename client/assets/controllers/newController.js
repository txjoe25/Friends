app.controller('newController', ['$scope','friendsFactory','$location', function($scope, friendsFactory,$location) {
/*
  THIS INDEX METHOD ACCESSES THE FRIENDS FACTORY AND RUNS THE FRIENDS INDEX.  WE MIGHT RE USE INDEX A FEW TIMES, SO TO MINIMIZE REPETITION WE SET IT AS A VARIABLE.
*/
var index = function(){
                        friendsFactory.index(function(returnedData){
                          $scope.friends = returnedData;
                          console.log($scope.friends);
                        });
            };
index();
$scope.min_year = moment().subtract(18, 'years').format('YYYY-MM-DD')
$scope.create = function(){
	if(Object.keys($scope.myForm.birthday.$error).length === 0 && Object.keys($scope.myForm.name.$error).length === 0){
	friendsFactory.create($scope.newFriend, function(){
	});
		$location.url('/');
	}
};

}]);
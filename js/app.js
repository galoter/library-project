angular.module('library-project',[]);

angular.module('library-project').controller('AuthorController',['$scope','$http',function($scope,$http){
	$http.get("http://localhost:8080/testGrails/auther/")
	.then(function(res){
		$scope.authors = res.data;

	});
}]);
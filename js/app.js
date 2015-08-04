angular.module('library-project',[]);

angular.module('library-project')
.controller('LibraryController',[function(){


}])
.controller('AuthorController',['$http',function($http){

	var vm = this;

	

	vm.state = 'list';

	vm.clearSelection = function(){
		vm.state = 'list';

	};

	vm.selectAuthor = function(index){
		vm.state = 'view';
		vm.selectedAuthor = vm.authors[index];
	};
	vm.createBtn = function(){
		vm.state = 'create';
		vm.model = {};
	};
	vm.submit = function(){

		if(vm.state === 'create'){
			createAuthor()
		}else{
			updateAuthor();
		}

		
	};
	vm.reload = function(){
		$http.get("http://localhost:8080/testGrails/auther/")
		.then(function(res){
			vm.authors = res.data;
		});
	};

	vm.editBtn = function(){
		vm.state = 'edit';
		vm.model = angular.copy(vm.selectedAuthor);
	};

	vm.reload();

	
	function createAuthor(){
		$http.post("http://localhost:8080/testGrails/auther/create",vm.model)
		.then(function(res){
			vm.state = 'view';
			vm.reload();
			vm.selectedAuthor = res.data;
		});
	};
	function updateAuthor(){
		$http.post("http://localhost:8080/testGrails/auther/update/" + vm.model.id,vm.model)
		.then(function(res){
			vm.state = 'view';
			vm.reload();
			vm.selectedAuthor = res.data;
		});
	};

}])
;
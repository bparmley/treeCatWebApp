angular.module('services', [])
	.factory('Trees', ['$http', function($http){
		get: function(callback){
			$http.get('js/treelist.json').success(function(data) {
      		callback(data);	
		});
	};
}]);
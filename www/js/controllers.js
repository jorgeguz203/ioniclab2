angular.module('app.controllers', [])
  
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.mdl = {};

}])

.controller('page2Ctrl', ['$scope', '$stateParams',
	function ($scope, $stateParams){
		$scope.name = $stateParams.name;
 		$scope.lastname = $stateParams.lastname;
	}
])
 
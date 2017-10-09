(function () {
    'use strict';

    angular
            .module('MyApp')
            .controller('indexController', indexController);

    indexController.$inject = ['$scope', '$state'];

    function indexController($scope, $state) {
      $scope.people = [];
      $scope.contact={};
      $scope.add = ()=>{
        $scope.people.unshift($scope.contact);
		delete $scope.contact;
		$scope.person = false; 
        localStorage.setItem("contact", JSON.stringify($scope.people));
      };
         
        };
        
})();
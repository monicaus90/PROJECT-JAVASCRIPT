(function () {
    'use strict';

    angular
            .module('MyApp')
            .controller('indexController', indexController);

    indexController.$inject = ['$scope', '$state'];

    function indexController($scope, $state) {
          $scope.reset = () => {
            delete $scope.infom;
            $scope.view1=true;
          };
          $scope.infom = {};
          $scope.view1 = true;
          $scope.information = () => {
           $scope.view1= false;
           localStorage.setItem("infom", JSON.stringify($scope.infom));
           $scope.resp1=("Hello " + $scope.infom.name + ", you have " + $scope.infom.age + " years old");
          }; 
        };
        
})();
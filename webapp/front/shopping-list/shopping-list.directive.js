(function () {
    "use strict";

    angular.module('uplication')
        .directive('shoppingList', function () {
            return {
                templateUrl: 'front/shopping-list/shopping-list.html',
                controller: shoppingListController,
                controllerAs: 'ctrl'
            }
        });

    function shoppingListController($scope, $state,$location,shoppingListService,$http, $resource) {
            loadSelectedRecipes();

            $scope.removeIngredient = function (parentIndex,index) {
                $scope.selectedRecipes[parentIndex].ingredients.splice(index,1);
                loadSelectedRecipes();
            }

            function loadSelectedRecipes() {
                $scope.selectedRecipes = shoppingListService.selectedRecipes;
            }

            $scope.click = function(){
                

                    $http.get("http://localhost:8080/javaee7-angular-3.10/resources/printouts/kek").then(function(response){
                        console.dir(response);
                    })
            }

    }


})();

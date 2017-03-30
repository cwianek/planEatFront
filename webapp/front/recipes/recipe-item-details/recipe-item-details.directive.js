(function () {
    "use strict";

    angular.module('uplication')
        .directive('recipeItemDetails', function () {
            return {
                templateUrl: 'front/recipes/recipe-item-details/recipe-item-details.html',
                controller: recipeItemDetailsController,
                controllerAs: 'ctrl',
            }
        });

    function recipeItemDetailsController($scope,$stateParams,shoppingListService) {
        $scope.recipe = $stateParams.recipe;

        $scope.addToShoppingList = function () {
            shoppingListService.selectedRecipes.push($scope.recipe);
        }
    }


})();

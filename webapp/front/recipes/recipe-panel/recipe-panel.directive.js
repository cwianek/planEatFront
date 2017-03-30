(function () {
    "use strict";

    angular.module('uplication')
        .directive('recipePanel', function () {
            return {
                templateUrl: 'front/recipes/recipe-panel/recipe-panel.html',
                controller: recipeItemDetailsController,
                controllerAs: 'ctrl',
            }
        });

    function recipeItemDetailsController($scope,$stateParams,$state) {
        $scope.recipes = $stateParams.recipes;

        $scope.goToDetailsRecipe = function (recipe) {
            $state.go('list.details',{recipe: recipe, recipes: $scope.recipes});
        };
    }


})();

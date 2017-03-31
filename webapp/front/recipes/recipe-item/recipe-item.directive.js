(function () {
    "use strict";

    angular.module('uplication')
        .directive('recipeItem', function () {
            return {
                templateUrl: 'front/recipes/recipe-item/recipe-item.html',
                controller: recipeItemController,
                controllerAs: 'ctrl',
                scope: {
                    recipe: '='
                }
            }
        });

    function recipeItemController($scope,$stateParams) {


    }


})();

(function () {
    "use strict";

    angular.module('uplication')
        .directive('recipeItem', function () {
            return {
                templateUrl: 'front/recipes/recipe-item/recipe-item.html',
                controller: recipeItemController,
                controllerAs: 'ctrl',
                scope: {
                    title: '=',
                    description: '=',
                    img: '='
                }
            }
        });

    function recipeItemController($scope,$stateParams) {


    }


})();

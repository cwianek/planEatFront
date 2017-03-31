(function () {
    "use strict";

    angular.module('uplication')
        .directive('recipes', function () {
            return {
                templateUrl: 'front/recipes/recipes.html',
                controller: recipesController,
                controllerAs: 'ctrl'
            }
        });

    function recipesController($scope, $state, $location) {

        $scope.recipe =
            {
                name: "Bigos",
                prepareTime: "10min",
                difficulty: "very easy",
                ingredients: [
                    {
                        quantity: "4",
                        unit: "spoons",
                        product: {
                            name: 'Flour',
                            proteins: 128,
                            carbs: 32,
                            fat: 16,
                            calories: 290
                        }
                    },
                    {
                        quantity: "2",
                        unit: "spoons",
                        product: {
                            name: 'Flour',
                            proteins: 128,
                            carbs: 32,
                            fat: 16,
                            calories: 290
                        }
                    },
                    {
                        quantity: "3",
                        unit: "spoons",
                        product: {
                            name: 'Flour',
                            proteins: 128,
                            carbs: 32,
                            fat: 16,
                            calories: 290
                        }
                    },
                    {
                        quantity: "4",
                        unit: "spoons",
                        product: {
                            name: 'Flour',
                            proteins: 128,
                            carbs: 32,
                            fat: 16,
                            calories: 290
                        }
                    },
                    {
                        quantity: "4",
                        unit: "spoons",
                        product: {
                            name: 'Flour',
                            proteins: 128,
                            carbs: 32,
                            fat: 16,
                            calories: 290
                        }
                    },


                ],
                instructionSteps: [
                    {
                        number: 1,
                        description: 'some description how to prepare the dinner'
                    },
                    {
                        number: 2,
                        description: 'some description how to prepare'
                    },
                    {
                        number: 3,
                        description: 'some description how to prepare'
                    },
                    {
                        number: 4,
                        description: 'some description how to prepare'
                    },
                    {
                        number: 5,
                        description: 'some description how to prepare'
                    },
                    {
                        number: 6,
                        description: 'some description how to prepare'
                    }


                ]

            };

       
        var recipeNames = ['Bigos', 'Grochowka', 'Jarzynowa']
        function mockRecipes() {
            var recipes = [];
            for (var i = 0; i < 25; i++) {
                var recipe = angular.copy($scope.recipe);
                recipe.name = recipeNames[i % recipeNames.length];
                recipe.img = 'images/'+recipe.name.toLowerCase() + '.jpg';
                recipes.push(recipe)
            }
            return recipes;
        };
        
        $scope.recipes = mockRecipes();
        
        $scope.goToDetailsRecipe = function (recipe) {
            $state.go('list.details', { recipe: recipe, recipes: $scope.recipes });
        };

    }


})();

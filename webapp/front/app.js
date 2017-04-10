(function () {
    "use strict";

    angular.module('uplication', ['ngAnimate','ngResource','ui.router'])
        .config(function($stateProvider, $urlRouterProvider,$httpProvider){

        $stateProvider
            .state('parent',{
                url:'/home',
                abstract: true,
                template: '<ui-view/>'
            })
            .state('recipes',{
                url: '/recipes',
                template: '<recipes></recipes>'
            })
            .state('shopping',{
                url: '/shopping',
                controller: function ($stateParams) {
                    console.log("TWORZE SIE");
                },
                template: '<shopping-list></shopping-list>',
            })
            .state('list',{
                abstract: true,
                url: '/list',
                templateUrl: 'front/recipes/recipes-main.html'
            })
            .state('list.details',{
                url: '/details',
                views:{
                    'content':{
                        template: '<recipe-item-details></recipe-item-details>',
                    },
                    'panel':{
                        template: '<recipe-panel></recipe-panel>'
                    }
                },
                params: {
                    recipe: null,
                    recipes: null
                }
            })

            $urlRouterProvider.otherwise('/recipes');

            $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    });




})();

(function () {
    "use strict";

    angular.module('uplication', ['ngAnimate','ngResource','ui.router','ui.bootstrap','ui-notification'])
        .config(function($stateProvider, $urlRouterProvider, NotificationProvider){

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
                },
                template: '<shopping-list></shopping-list>',
            })
            .state('list',{
                abstract: true,
                url: '/list',
                templateUrl: 'front/recipes/recipes-main.html'
            })
            .state('manageAccount',{
                url: '/manageAccount',
                template: '<account-manager></account-manager>'
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


            NotificationProvider.setOptions({
            delay: 2000,
            startTop: 20,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'top'
        });
            
    });


    angular.module('uplication').controller('userController', userController);
    
     function userController($scope, accountService){
         $scope.accountService = accountService;

         $scope.$watch('accountService.getAccountInfo()',function(newVal){
             $scope.logged = newVal.logged;
             $scope.username = newVal.user;
         }, true);

         $scope.openRegisterModal = accountService.openRegisterModal;
         $scope.openLogInModal = accountService.openLogInModal;
         $scope.logout = accountService.logout;
    }



    


})();

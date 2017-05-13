(function () {
    "use strict";

    angular.module('uplication.account', ['ngAnimate','ngResource','ui.router','ui.bootstrap','ui-notification'])
        .config(function($stateProvider){

        $stateProvider
            .state('account',{
                abstract: true,
                url: '/account',
                templateUrl: 'front/account/account.html'
            })
            .state('account.settings',{
                url: '/settings',
                views:{
                    'content':{
                        template: 'jakis tam template',
                    }
                }
            })
            .state('account.user-products',{
                url: '/user-products',
                views:{
                    'content':{
                        template: '<user-products></user-products>',
                    }
                }
            })
            
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

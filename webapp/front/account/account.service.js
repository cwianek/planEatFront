(function () {
    "use strict";

    angular.module('uplication')
        .service('accountService', AccountService);

    function AccountService($uibModal, $state, Notification) {
        var service = this;
        var accountInfo = {
            logged: false,
            user: null
        }

        service.openRegisterModal = openRegisterModal;
        service.openLogInModal = openLogInModal;

        service.getAccountInfo = function () {
            return accountInfo;
        }

        service.logout = function () {
            accountInfo.logged = false;
            accountInfo.user = null;
            $state.go('recipes');
            Notification.success("Logout successful");
        }

        function handleError(response, error) {
            console.dir(response);
            error.message = response.data.message;
            error.show = true;
        }

        function openLogInModal() {
            $uibModal.open({
                templateUrl: 'front/account/login-modal.html',
                size: 'md',
                controller: function ($scope, $uibModalInstance, $http) {
                    $scope.user = {};
                    $scope.error = {};

                    $scope.$watch('errorMessage', function () {
                        console.log("changed");
                    })

                    $scope.close = function () {
                        $uibModalInstance.close();
                    }

                    $scope.switchToRegister = function () {
                        $scope.close();
                        openRegisterModal();
                    }

                    $scope.logIn = function () {
                        console.dir($scope.user);
                        $http.post("http://localhost:8080/user/login", $scope.user)
                            //$http.post("http://planeat-echomil.rhcloud.com/user/login", $scope.user)
                            .then(function success(response) {
                                accountInfo.logged = true;
                                accountInfo.user = $scope.user.username;
                                $scope.close();
                                Notification.success('Logged successful');
                            }, function error(response) {
                                handleError(response, $scope.error);
                            });

                    }
                }
            });
        }

        function openRegisterModal() {
            $uibModal.open({
                templateUrl: 'front/account/register-modal.html',
                size: 'md',
                controller: function ($scope, $uibModalInstance, $http) {
                    $scope.close = close;
                    $scope.user = {};
                    $scope.error = {};

                    function close() {
                        $uibModalInstance.close();
                    }

                    $scope.register = function () {
                        if ($scope.user.password === $scope.user.passwordRepeat) {
                            $http.post("http://localhost:8080/user/register", $scope.user)
                                //$http.post("http://planeat-echomil.rhcloud.com/user/register", $scope.user)
                                .then(function success(response) {
                                    accountInfo.logged = true;
                                    accountInfo.user = $scope.user.username;
                                    close();
                                    Notification.success('Registered successful');
                                }, function error(response) {
                                    handleError(response, $scope.error);
                                });
                        } else {
                            $scope.error.message = 'Passwords doesnt match';
                            $scope.error.show = true;
                        }
                    }
                }
            });
        }


    }

})();

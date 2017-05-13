(function () {
    "use strict";

    angular.module('uplication.account')
        .component('userProducts', {
            templateUrl: 'front/account/account-views/user-products/user-products.component.html',
            controller: UserProductsController,
        });

    function UserProductsController($scope) {
        var ctrl = this;

        $scope.addProduct = addProduct;
        $scope.removeProduct = removeProduct;
        $scope.products = [];

        function addProduct() {
            if ($scope.productName !== '') {
                $scope.products.push({ name: $scope.productName });
                $scope.productName = '';
            }
        }

        $scope.editProduct = function(index){
            console.log("edit");
            document.getElementById($scope.products[index].name).focus();
        }

        function removeProduct(index) {
            console.log("remove product");
            $scope.products.splice(index, 1);
        }

    }

})();

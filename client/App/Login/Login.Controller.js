(function () {
    'use strict';

    angular
        .module('app')
        .controller('LoginController',['$scope', 'loginService', '$rootScope', '$window','$location', '$http', function ($scope, loginService, $rootScope, $window, $location, $http) {
            var LoginVm = this;

            LoginVm.emailaddress = '';
            LoginVm.pwd = '';

            LoginVm.login = function ()
            {
                loginService.success(function (response) {
                    $scope.data = response;
                });
                console.log($scope.data);
                for (var a in $scope.data){
                    if ($scope.data[a].email == LoginVm.emailaddress && $scope.data[a].password == LoginVm.pwd) {
                        $location.path('/Home');
                        $rootScope.auth = true;
                    }
                    else {
                    }
                }
            };
        }]);

})();

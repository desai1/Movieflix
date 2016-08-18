var List = [];
(function () {
    'use strict';

        angular
        .module('app')
        .controller('SignupController',SignupController);

    SignupController.$inject = ['$http','$location'];

        function SignupController ($http,$location)
        {
            var sign = this;

            sign.newuser = {};
            sign.newuser.firstName = '';
            sign.newuser.lastName = '';
            sign.newuser.email = '';
            sign.newuser.password = '';
            sign.create = create;

            function create() {

                List.push(sign.newuser);
                sessionStorage.setItem("userdata", JSON.stringify(List));
                console.log(angular.toJson(sign.newuser));
                $http.post('http://localhost:8080/spring-rest/api/users', angular.toJson(sign.newuser))
                    .success(function (response) {
                        console.log(response);
                        $location.path('/Home');
                    });
            }
        }
})();

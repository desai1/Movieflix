(function () {
    angular
        .module('app')
        .factory('loginService',['$http', function ($http) {
            return $http.get('http://localhost:8080/spring-rest/api/users');

        }]);

})();

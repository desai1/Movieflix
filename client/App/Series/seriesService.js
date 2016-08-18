(function() {
    'use strict';

    angular
        .module('app')
        .service('seriesService', seriesService);

    seriesService.$inject = ['$http', '$q'];

    function seriesService($http, $q) {
        var my = this;

        my.getseries = getseries;
        my.getsrs = getsrs;

        function getseries() {
            return $http.get('http://localhost:8080/spring-rest/api/series')
                .then(successFn, errorFn);
        }

        function getsrs(id) {
            return $http.get('http://localhost:8080/spring-rest/api/series/' + id)
                .then(successFn, errorFn);
        }

        function successFn(response) {
            return response.data;
        }

        function errorFn(error) {
            return $q.reject(error.status);
        }
    }
})();
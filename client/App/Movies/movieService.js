(function() {
    'use strict';

    angular
        .module('app')
        .service('movieService', movieService);


    movieService.$inject = ['$http', '$q'];

    function movieService($http, $q) {
        var self = this;

        self.getmovies = getmovies;
        self.getmovie = getmovie;
        self.putmovie = putmovie;

        function getmovies() {
            return $http.get('http://localhost:8080/spring-rest/api/movies')
                .then(successFn, errorFn);
        }

        function getmovie(id) {
            return $http.get('http://localhost:8080/spring-rest/api/movies/' + id)
                .then(successFn, errorFn);
        }

        function putmovie(id) {
            return $http.put('http://localhost:8080/spring-rest/api/movies/' + id)
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







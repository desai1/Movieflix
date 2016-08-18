(function() {
    'use strict';

    angular
        .module('app')
        .controller('MovieDetailController', MovieDetailController);

    MovieDetailController.$inject = ['movieService', '$routeParams'];

    function MovieDetailController(movieService, $routeParams) {
        var selfVm = this;

        init();

        function init() {
            movieService
                .getmovie($routeParams.id)
                .then(function (data) {
                    selfVm.movie = data;
                }, function (error) {
                    console.log(error);
                });
        }

    }
})();
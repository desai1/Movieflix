(function() {
    'use strict';

    angular
        .module('app')
        .controller('SeriesDetailController', SeriesDetailController);

    SeriesDetailController.$inject = ['seriesService', '$routeParams'];

    function SeriesDetailController(seriesService, $routeParams) {
        var srsVm = this;

        myfunc();

        function myfunc() {
            seriesService
                .getsrs($routeParams.id)
                .then(function(data) {
                     srsVm.series = data;
                }, function(error) {
                    console.log(error);
                });
        }
    }
})();
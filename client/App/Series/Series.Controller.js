(function(){

    'use strict';
    angular
        .module('app')
        .controller('SeriesController', SeriesControllerFn);


    SeriesControllerFn.$inject= ['seriesService'];

    function SeriesControllerFn (seriesService) {
        var myVm = this;

        seriesService.getseries()
            .then(function(data) {
                myVm.series = data;
            })
            .catch(function(error) {
                console.log(error);
            });

        myVm.Sorter = {
            sortBy: 'year',
            sortOrder: false
        };
    }

})();

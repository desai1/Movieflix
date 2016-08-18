(function(){

      'use strict';
        angular
          .module('app')
         .controller('MovieController', MovieControllerFn);

    MovieControllerFn.$inject= ['movieService'];

    function MovieControllerFn (movieService) {
           var mainVm = this;

        movieService.getmovies()
            .then(function(data) {
                mainVm.movie = data;
            })
            .catch(function(error) {
                console.log(error);
            });

        mainVm.sorter = {
            sortBy: 'imdbRating',
            sortOrder: false,
        };
    }


    })();






(function() {
    'use strict';

    angular
        .module('app', ['ngRoute','ngMessages'])
        .config(moduleConfig)
        .run(moduleRun);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'Login/Login.html',
                controller: 'LoginController',
                controllerAs: 'LoginVm'
            })
            .when('/signup', {
                       templateUrl: 'Signup/Signup.html',
                       controller: 'SignupController',
                       controllerAs: 'sign'
            })
            .when('/Home', {
                resolve:{
                    "check": function($location,$rootScope){
                        if(!$rootScope.auth){
                            $location.path('/');
                        }
                    }
                },
                templateUrl: 'Home/Home.html',
                controller: 'HomeController',
                controllerAs: 'HomeVm'
            })
            .when('/Movies', {
                resolve:{
                    "check": function($location,$rootScope){
                        if(!$rootScope.auth){
                            $location.path('/');
                        }
                    }
                },
                templateUrl: 'Movies/Movies.html',
                controller: 'MovieController',
                controllerAs: 'mainVm'
            })
            .when('/MovieDetail/:id', {
                resolve:{
                    "check": function($location,$rootScope){
                        if(!$rootScope.auth){
                            $location.path('/');
                        }
                    }
                },
                templateUrl: 'Movies/MovieDetail.html',
                controller: 'MovieDetailController',
                controllerAs: 'selfVm'
            })
            .when('/Series', {
                resolve:{
                    "check": function($location,$rootScope){
                        if(!$rootScope.auth){
                            $location.path('/');
                        }
                    }
                },
                templateUrl: 'Series/Series.html',
                controller: 'SeriesController',
                controllerAs: 'myVm'
            })
            .when('/SeriesDetail/:id', {
                resolve:{
                    "check": function($location,$rootScope){
                        if(!$rootScope.auth){
                            $location.path('/');
                        }
                    }
                },
                templateUrl: 'Series/SeriesDetail.html',
                controller: 'SeriesDetailController',
                controllerAs: 'srsVm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }

    moduleRun.$inject = [];

    function moduleRun() {
        console.log('App Started');
    }
})();
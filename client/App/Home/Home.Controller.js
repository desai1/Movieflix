(function(){
    'use strict';

    angular
        .module('app')
        .controller('HomeController',HomeControllerFn );

    HomeControllerFn.$inject = [];

    function HomeControllerFn () {
        var HomeVm = this;
        HomeVm.message=true;
        HomeVm.objects = ["Entertainment","Live Streaming","HD Quality","Free Download"];
    }
})();
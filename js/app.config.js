(function() {
    'use strict';

    angular.module('app').config(config)

    config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
    //
    function config($stateProvider, $urlRouterProvider, $locationProvider, $http) {
        $locationProvider.html5Mode(true)
        $stateProvider
            .state({
                name: 'driver',
                url: '/:id',
                component: 'driver',
            })
            .state({
                name: 'name',
                url: '/',
                component: 'name',
            })
            .state({
                name: 'quote',
                url: '/:id',
                component: 'quote',
            })
        $urlRouterProvider.otherwise('/')
    }
}());

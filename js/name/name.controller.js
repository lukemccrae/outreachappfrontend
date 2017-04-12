(function() {
        'use strict'

        angular.module('app')
            .component('name', {
                controller: controller,
                templateUrl: '/js/name/name.component.html'
            })

        function controller($state, $http, $stateParams) {
          const vm = this;
          vm.quoteData = {}
          vm.$onInit = function() {

          }


    }
());

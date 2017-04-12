(function() {
        'use strict'

        angular.module('app')
            .component('quote', {
                controller: controller,
                templateUrl: '/js/quote/quote.component.html'
            })

        function controller($state, $http, $stateParams) {
          const vm = this;
          vm.quoteData = {}
          vm.$onInit = function() {
            $http.get(`http://localhost:3000/${$stateParams.id}`)
            .then(function(data) {
              console.log(data);
              vm.quoteData = data.data.data[0]
            })
          }
    }
());

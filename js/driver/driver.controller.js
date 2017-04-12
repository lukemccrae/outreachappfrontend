(function() {
        'use strict'

        angular.module('app')
            .component('driver', {
                controller: controller,
                templateUrl: '/js/driver/driver.component.html'
            })

        function controller($state, $http, $stateParams) {
          const vm = this;
          vm.vehicle = {}
          vm.$onInit = function() {
            $http.get(`http://localhost:3000/${$stateParams.id}`)
            .then(function(data) {
              console.log(data);
              vm.vehicle = data.data.data[0]
              console.log(vm.vehicle);
            })
          }

          vm.submitQuote = function () {
            console.log(vm.vehicle);
            $http.post('http://localhost:3000/', vm.vehicle)
            .then(function(response) {
              console.log(response.data.data[0].id);
              $state.go('quote', {
                "id": response.data.data[0].id
              })
            })
          }
        }
    }
());

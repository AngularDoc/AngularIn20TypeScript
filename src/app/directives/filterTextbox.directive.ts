import * as angular from 'angular';
class FilterTextbox implements angular.IDirective {

    static instance(): angular.IDirective {
        return new FilterTextbox();
    }

    template = 'Search: <input type="text" ng-model="vm.filter" /> {{ vm.message }}';
    restrict = 'E';
    scope = {
        filter: '='
    };
    controller: ($scope: angular.IScope) => void;
    controllerAs = 'vm';
    bindToController = true;

    constructor() {
        this.controller = function ($scope: angular.IScope) {
            var vm = this;
            vm.message = 'Hello';

            $scope.$watch('vm.filter', (newVal, oldVal) => {
                if (oldVal !== '' && newVal === '') {
                    vm.message = 'Please enter a value';
                } else {
                    vm.message = '';
                }
            });
        };
    }
}

angular.module('demoApp').directive('filterTextbox', FilterTextbox.instance);


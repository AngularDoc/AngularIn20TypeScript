import * as angular from 'angular';
export interface ICustomer {
    id: number;
    name: string;
    total: number;
}

export interface IOrder {
    product: string;
    total: number;
}

export class DataService {

    static $inject = ['$http'];
    constructor(private $http: angular.IHttpService) { }

    getCustomers(): angular.IPromise<ICustomer[]> {
        return this.$http.get('customers.json').then(response => {
            return response.data;
        });
    }

    getOrder(id: number): angular.IPromise<IOrder[]> {
        return this.$http.get('orders.json', { data: { id: id } }).then(response => {
            return response.data;
        });
    }
}

angular.module('demoApp')
    .service('demoApp.dataService', DataService);


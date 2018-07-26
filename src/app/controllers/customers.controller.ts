import * as angular from 'angular';
import { ICustomer, DataService } from '../services/data.service';


    class CustomersController {
        customers: ICustomer[] = null;

        static $inject = ['demoApp.dataService'];
        constructor(dataService: DataService) {
            dataService.getCustomers()
              .then((custs: ICustomer[]) => {
                 this.customers = custs;
              });
        }
    }

    angular.module('demoApp')
           .controller('demoApp.CustomersController', CustomersController);



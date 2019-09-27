import template from './template.pug';
import { SpinnerLoaderService } from './spinner-loader.service.js';
import './styles.scss';

const component = {
  controller: [
    'SpinnerLoaderService',
    function (SpinnerLoaderService) {
      this.active = () => SpinnerLoaderService.active;
    }
  ],
  template: template()
};

const spinerLoaderModule = angular.module('app.spinner-loader', [])
                                  .service('SpinnerLoaderService', SpinnerLoaderService)
                                  .component('spinnerLoaderComponent', component);

export { spinerLoaderModule };

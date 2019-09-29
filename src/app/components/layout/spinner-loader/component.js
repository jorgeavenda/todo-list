import template from './template.pug';
import { SpinnerLoader } from './spinner-loader.factory.js';
import './styles.scss';

const component = {
  controller: [
    'SpinnerLoader',
    function (SpinnerLoader) {
      this.spinner = SpinnerLoader;
    }
  ],
  template: template()
};

const spinerLoaderModule = angular.module('app.spinner-loader', [])
                                  .factory('SpinnerLoader', SpinnerLoader)
                                  .component('spinnerLoaderComponent', component);

export { spinerLoaderModule };

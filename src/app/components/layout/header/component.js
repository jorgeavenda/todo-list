import template from './template.pug';

const component = {
  template: template()
};

const headerModule = angular.module('app.header', [])
                          .component('headerComponent', component);

export { headerModule };

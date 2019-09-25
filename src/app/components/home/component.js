import template from './template.pug';

const component = {
  template: template()
};

const homeModule = angular.module('app.home', [])
                          .component('homeComponent', component);

export { homeModule };

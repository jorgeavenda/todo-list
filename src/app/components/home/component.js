import template from './template.pug';
import styles from './styles.scss';

const component = {
  bindings: {
    board: '<'
  },
  template: template()
};

const homeModule = angular.module('app.home', [])
                          .component('homeComponent', component);

export { homeModule };

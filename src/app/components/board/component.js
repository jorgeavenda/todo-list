import template from './template.pug';
import styles from './styles.scss';

const component = {
  bindings: { tickets: '<' },
  template: template()
};

const boardModule = angular.module('app.board', [])
                          .component('boardComponent', component);

export { boardModule };

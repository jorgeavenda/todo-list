import template from './template.pug';
import styles from './styles.scss';
import { BoardController } from './controller.js';
import { ticketModalModule } from  './modal/component.js';

const component = {
  controller: BoardController,
  bindings: {
    board: '<',
    tickets: '<'
  },
  template: template()
};

const DEPENDENCIES = [
  ticketModalModule.name
];

const boardModule = angular.module('app.board', DEPENDENCIES)
                           .component('boardComponent', component);

export { boardModule };

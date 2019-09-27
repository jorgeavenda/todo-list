import template from './template.pug';
import { TicketModalController } from  './controller.js';

const component = {
  controller: TicketModalController,
  bindings: {
    resolve: '<',
    dismiss: '&',
    close: '&'
  },
  template: template()
};

const ticketModalModule = angular.module('app.board.ticketModal', [])
                                 .component('ticketModalComponent', component);

export { ticketModalModule };

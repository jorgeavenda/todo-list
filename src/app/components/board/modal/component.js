import template from './template.pug';

const component = {
  controller: function () {},
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

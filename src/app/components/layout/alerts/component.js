import template from './template.pug';
import { Alerts } from './alerts.factory.js';
import './styles.scss';

const component = {
  controller: [
    'Alerts',
    function (Alerts) {
      this.alerts = Alerts.list;

      this.closeAlert = (index) => {
        Alerts.remove(index);
      };
    }
  ],
  template: template()
};

const alertsModule = angular.module('app.alert', [])
                            .factory('Alerts', Alerts)
                            .component('alertsComponent', component);

export { alertsModule };

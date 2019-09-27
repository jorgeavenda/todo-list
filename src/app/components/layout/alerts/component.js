import template from './template.pug';
import { AlertsService } from './alerts.service.js';
import './styles.scss';

const component = {
  controller: [
    'AlertsService',
    function (AlertsService) {
      this.$onInit = () => {
        this.alerts = AlertsService.alerts;
      };

      this.closeAlert = (index) => {
        this.alerts.splice(index, 1);
      };
    }
  ],
  template: template()
};

const alertsModule = angular.module('app.alert', [])
                            .service('AlertsService', AlertsService)
                            .component('alertsComponent', component);

export { alertsModule };

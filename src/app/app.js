import 'angular-ui-router';
import 'oclazyload';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'angular-animate';
import 'angular-touch';
import 'ui-bootstrap4';
import 'lodash/array';
import { appRoutes } from './app.routes.js';
import { headerModule } from './components/layout/header/component.js';
import { alertsModule } from './components/layout/alerts/component.js';
import { spinerLoaderModule } from './components/layout/spinner-loader/component.js';
import { BoardsService } from './services/boards.service.js';
import { TicketsService } from './services/tickets.service.js';
import { StatusService } from './services/status.service.js';
import { convertToNumber } from './directives/convert-to-number.directive.js';
import './app.scss';

const modules = [
  headerModule.name,
  alertsModule.name,
  spinerLoaderModule.name
];

const DEPENDENCIES = modules.concat([
  'ui.router',
  'oc.lazyLoad',
  'ngAnimate',
  'ngTouch',
  'ui.bootstrap'
]);

function runConfig($http) {
  var koeApiToken = window.localStorage.getItem('koeApiToken');

  $http.defaults.headers.common.Authorization = koeApiToken;
};

const app = angular.module('app', DEPENDENCIES)
                   .directive('convertToNumber', convertToNumber)
                   .config(appRoutes)
                   .service('BoardsService', BoardsService)
                   .service('TicketsService', TicketsService)
                   .service('StatusService', StatusService)
                   .run(runConfig);

export { app };

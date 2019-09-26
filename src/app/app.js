import 'angular-ui-router';
import 'oclazyload';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'angular-ui-bootstrap';
import { appRoutes } from './app.routes.js';
import { headerModule } from './components/layout/header/component.js';
import './app.scss';

import { BoardsService } from './services/boards.service.js';
import { TicketsService } from './services/tickets.service.js';

const modules = [
  headerModule.name
];

const DEPENDENCIES = modules.concat([
  'ui.router',
  'oc.lazyLoad',
  'ui.bootstrap'
]);

function runConfig($http) {
  var koeApiToken = window.localStorage.getItem('koeApiToken');

  $http.defaults.headers.common.Authorization = koeApiToken;
};

const app = angular.module('app', DEPENDENCIES)
                   .config(appRoutes)
                   .service('BoardsService', BoardsService)
                   .service('TicketsService', TicketsService)
                   .run(runConfig);

export { app };

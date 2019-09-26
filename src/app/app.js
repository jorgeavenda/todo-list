import 'angular-ui-router';
import 'oclazyload';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import { appRoutes } from './app.routes.js';
import './app.scss';

const DEPENDENCIES = [
  'ui.router',
  'oc.lazyLoad'
];

function runConfig($http) {
  var koeApiToken = window.localStorage.getItem('koeApiToken');

  $http.defaults.headers.common.Authorization = koeApiToken;
};

const app = angular.module('app', DEPENDENCIES)
                   .config(appRoutes)
                   .run(runConfig);

export { app };

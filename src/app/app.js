import 'angular-ui-router';
import 'oclazyload';
import { appRoutes } from './app.routes.js';
import './app.scss';

const DEPENDENCIES = [
  'ui.router',
  'oc.lazyLoad'
];

const app = angular.module('app', DEPENDENCIES)
                   .config(appRoutes);

export { app };

import { homeState } from './components/home/state.js';
import { boardState } from './components/board/state.js';

function appRoutes ($locationProvider, $urlRouterProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', homeState);
  $stateProvider.state('board', boardState);
};

appRoutes.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

export { appRoutes };

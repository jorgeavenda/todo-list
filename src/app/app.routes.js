import { homeState } from './components/home/state.js';

function appRoutes ($locationProvider, $urlRouterProvider, $stateProvider) {
  $stateProvider.state(homeState);

  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);
};

appRoutes.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

export { appRoutes };

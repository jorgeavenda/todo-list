const homeState = {
  name: 'home',
  url: '/',
  component: 'homeComponent',
  lazyLoad: function ($transition$) {
    var $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
    return import('./component.js').then(mod => $ocLazyLoad.load(mod.homeModule));
  },
  resolve: {
    boards: [
      'BoardsService',
      function(BoardsService) {
        return BoardsService.query().then(res => res.data);
      }
    ]
  }
};

export { homeState };

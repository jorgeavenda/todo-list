const homeState = {
  name: 'home',
  url: '/',
  component: 'homeComponent',
  lazyLoad: function ($transition$) {
    var $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
    return System.import('./component.js')
                 .then(mod => $ocLazyLoad.load(mod.homeModule));
  }
};

export { homeState };

const boardState = {
  name: 'board',
  url: '/board/{boardId}',
  component: 'boardComponent',
  lazyLoad: function ($transition$) {
    var $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
    return System.import('./component.js')
                 .then(mod => $ocLazyLoad.load(mod.boardModule));
  },
  resolve: {
    tickets: [
      'TicketsService',
      '$stateParams',
      function(TicketsService, $stateParams) {
        const boardId = $stateParams.boardId;
        return TicketsService.query(boardId).then(res => res.data);
      }
    ]
  }
};

export { boardState };

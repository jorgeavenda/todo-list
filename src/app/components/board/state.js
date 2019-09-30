const boardState = {
  name: 'board',
  url: '/board/{boardId}',
  component: 'boardComponent',
  lazyLoad: function ($transition$) {
    var $ocLazyLoad = $transition$.injector().get('$ocLazyLoad');
    return import('./component.js')
                 .then(mod => $ocLazyLoad.load(mod.boardModule));
  },
  resolve: {
    board: [
      'BoardsService',
      '$stateParams',
      function(BoardsService, $stateParams) {
        const boardId = $stateParams.boardId;
        return BoardsService.get(boardId).then(res => res.data);
      }
    ],
    tickets: [
      'TicketsService',
      '$stateParams',
      function(TicketsService, $stateParams) {
        const boardId = $stateParams.boardId;
        TicketsService.setBoardId(boardId);
        return TicketsService.query(boardId).then(res => res.data);
      }
    ]
  }
};

export { boardState };

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
      '$http',
      '$stateParams',
      function($http, $stateParams) {
        const boardId = $stateParams.boardId;

        // http://todolist.koeonline.net/api/tablero/{idTablero}
        // Detalle de un solo tablero

        // GET
        // http://todolist.koeonline.net/api/tablero/{idTablero}/ticket

        // $http.get('http://todolist.koeonline.net/api/tablero/'+boardId)
        // .then(res => {
        //   console.log('res.data: ', res.data);
        // });

        return $http.get('http://todolist.koeonline.net/api/tablero/'+boardId+'/ticket')
        .then(res => res.data);
      }
    ]
  }
};

export { boardState };

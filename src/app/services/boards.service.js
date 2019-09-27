function BoardsService ($http) {
  this.query = () => $http.get('http://todolist.koeonline.net/api/tablero');

  this.get = (id) => $http.get(`http://todolist.koeonline.net/api/tablero/${id}`);
};

BoardsService.$inject = ['$http'];

export { BoardsService };

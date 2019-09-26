function BoardsService ($http) {
  this.query = () => {
    return $http.get('http://todolist.koeonline.net/api/tablero');
  };

  this.get = (id) => {
    return $http.get(`http://todolist.koeonline.net/api/tablero/${id}`);
  };
};

BoardsService.$inject = ['$http'];

export { BoardsService };

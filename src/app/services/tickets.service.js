function TicketsService ($http) {
  this.query = (idBoard) => {
    return $http.get(`http://todolist.koeonline.net/api/tablero/${idBoard}/ticket`);
  };

  this.get = (id) => {
    return $http.get(`http://todolist.koeonline.net/api/ticket/${id}`)
  };

  this.create = (idBoard, ticket) => {
    return $http.post(`http://todolist.koeonline.net/api/tablero/${idBoard}/ticket`, ticket);
  };

  this.delete = (id) => {
    return $http.delete(`http://todolist.koeonline.net/api/ticket/${id}`);
  };

  this.update = (id) => {
    return $http.put(`http://todolist.koeonline.net/api/ticket/${id}`);
  };
};

TicketsService.$inject = ['$http'];

export { TicketsService };

function TicketsService ($http) {
  this.setBoardId = (id) => {
    this.boardId = id;
  };

  this.query = (idBoard) => $http.get(`http://todolist.koeonline.net/api/tablero/${idBoard}/ticket`);

  this.get = (id) => $http.get(`http://todolist.koeonline.net/api/ticket/${id}`);

  this.create = (idBoard, ticket) => $http.post(`http://todolist.koeonline.net/api/tablero/${idBoard}/ticket`, ticket);

  this.delete = (id) => $http.delete(`http://todolist.koeonline.net/api/ticket/${id}`);

  this.update = (ticket) => $http.put(`http://todolist.koeonline.net/api/ticket/${ticket.id}`, ticket);
};

TicketsService.$inject = ['$http'];

export { TicketsService };

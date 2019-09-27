function StatusService ($http) {
  this.query = () => $http.get('http://todolist.koeonline.net/api/status');
};

StatusService.$inject = ['$http'];

export { StatusService };

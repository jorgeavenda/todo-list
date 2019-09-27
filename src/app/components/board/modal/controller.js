function TicketModalController (StatusService, TicketsService) {
  this.$onInit = () => {
    this.ticket = this.resolve.ticket ? angular.copy(this.resolve.ticket) : {};
    StatusService.query().then((res) => {
      this.statuses = res.data;
      this.ticket.idStatus = !!this.ticket.estatus ? this.statuses.find(s => s.name === this.ticket.estatus[0].name).id : '';
    });
  };

  this.save = (valid) => {
    this.ticketForm.$setSubmitted();
    this.ticket.estimatedTime = this.ticket.estimated_time;
    if (valid) {
      if (this.ticket.id) {
        TicketsService.update(this.ticket).then((res) => {
          this.close({ $value: res.data });
        });
      } else {
        TicketsService.create(TicketsService.boardId, this.ticket).then((res) => {
          this.close({ $value: res.data });
        });
      }
    }
  };
};

TicketModalController.$inject = ['StatusService', 'TicketsService'];

export { TicketModalController };

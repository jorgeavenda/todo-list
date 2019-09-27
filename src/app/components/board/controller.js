function BoardController ($uibModal, TicketsService, StatusService) {
  this.$onInit = () => {
    StatusService.query().then(res => {
      this.statuses = res.data;
    });
  };

  this.openTicketModal = (ticket) => {
    $uibModal.open({
      animation: true,
      component: 'ticketModalComponent',
      resolve: {
        ticket: () => ticket
      }
    }).result.then(idTicket => {
      TicketsService.get(idTicket).then(res => {
        if (ticket) {
          angular.merge(ticket, res.data);
        } else {
          this.tickets.push(res.data);
        }
      });
    });
  };

  this.delete = ($event, ticket) => {
    $event.stopPropagation();
    let r = confirm("¿Estas seguro?");
    if (r == true) {
      TicketsService.delete(ticket.id).then(() => {
        this.tickets = this.tickets.filter((t) => {
          return t.id !== ticket.id;
        });
      });
    }
  };

  this.setStatus = (ticket, status) => {
    ticket.idStatus = parseInt(status.id, 10);
    TicketsService.update(ticket).then((res) => {
      TicketsService.get(res.data).then(res => {
        angular.merge(ticket, res.data);
      });
    });
  };
};

BoardController.$inject = ['$uibModal', 'TicketsService', 'StatusService'];

export { BoardController };

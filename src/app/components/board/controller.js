function BoardController ($uibModal, TicketsService, StatusService, AlertsService, SpinnerLoaderService) {
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
      this.deleting = true;
      SpinnerLoaderService.show();
      TicketsService.delete(ticket.id).then(() => {
        this.tickets = this.tickets.filter((t) => {
          return t.id !== ticket.id;
        });
        AlertsService.addAlert({
          title: 'Se elimino el ticket correctamente',
          type: 'success'
        });
      }, () => {
        AlertsService.addAlert({
          title: 'Ocurrió un error al intentar eliminar el ticket. Inténtalo de nuevo',
          type: 'danger'
        });
      }).finally(() => {
        SpinnerLoaderService.hide();
        this.deleting = false;
      });
    }
  };

  this.setStatus = (ticket, status) => {
    SpinnerLoaderService.show();
    ticket.idStatus = parseInt(status.id, 10);
    TicketsService.update(ticket).then((res) => {
      AlertsService.addAlert({
        title: 'Se actualizo el ticket correctamente',
        type: 'success'
      });
      TicketsService.get(res.data).then(res => {
        angular.merge(ticket, res.data);
      });
    }, () => {
      AlertsService.addAlert({
        title: 'Ocurrió un error al intentar actualizar el ticket. Inténtalo de nuevo',
        type: 'danger'
      });
    }).finally(() => {
      SpinnerLoaderService.hide();
    });
  };
};

BoardController.$inject = ['$uibModal', 'TicketsService', 'StatusService', 'AlertsService', 'SpinnerLoaderService'];

export { BoardController };

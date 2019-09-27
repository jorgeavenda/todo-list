function TicketModalController (StatusService, TicketsService, SpinnerLoaderService, AlertsService) {
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
      SpinnerLoaderService.show();
      this.saving = true;
      if (this.ticket.id) {
        TicketsService.update(this.ticket).then((res) => {
          AlertsService.addAlert({
            title: 'Se actualizo el ticket correctamente',
            type: 'success'
          });
          this.close({ $value: res.data });
        }, () => {
          AlertsService.addAlert({
            title: 'Ocurrió un error al intentar actualizar el ticket. Inténtalo de nuevo',
            type: 'danger'
          });
        }).finally(() => {
          SpinnerLoaderService.hide();
          this.saving = false;
        });
      } else {
        TicketsService.create(TicketsService.boardId, this.ticket).then((res) => {
          AlertsService.addAlert({
            title: 'Se creo el ticket correctamente',
            type: 'success'
          });
          this.close({ $value: res.data });
        }, () => {
          AlertsService.addAlert({
            title: 'Ocurrió un error al intentar crear el ticket. Inténtalo de nuevo',
            type: 'danger'
          });
        }).finally(() => {
          SpinnerLoaderService.hide();
          this.saving = false;
        });
      }
    }
  };
};

TicketModalController.$inject = ['StatusService', 'TicketsService', 'SpinnerLoaderService', 'AlertsService'];

export { TicketModalController };

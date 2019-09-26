function BoardController ($uibModal) {
  this.openCreateTicketModal = () => {
    $uibModal.open({
      animation: true,
      component: 'ticketModalComponent'
    });
  };
};

BoardController.$inject = ['$uibModal'];

export { BoardController };

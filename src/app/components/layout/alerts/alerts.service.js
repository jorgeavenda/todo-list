function AlertsService () {
  this.alerts = [];

  this.addAlert = (msg) => {
    this.alerts.push({
      type: msg.type,
      msg: msg.title
    });
  };
};

export { AlertsService };

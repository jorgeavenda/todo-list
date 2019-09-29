function Alerts () {
  const alerts = {};
  alerts.list = [];

  alerts.add = (msg) => {
    alerts.list.push({
      type: msg.type,
      msg: msg.title
    });
  };

  alerts.remove = (index) => {
    alerts.list.splice(index, 1);
  };

  return alerts;
};

export { Alerts };

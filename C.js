// State carried event transfer

var Server1 = {
  name: "Server1",
  data: 0,
  notify: function (eventType, data) {
    console.log(`Got notified a ${eventType}-Event with data: ${data}`);
    this.data = data;
  },
};
var Server2 = {
  name: "Server2",
  data: 5,
  notify: function (eventType, data) {
    console.log(`Got notified a ${eventType}-Event with data: ${data}`);
    this.data = data;
  },
};
// todo type of event has to be sent
// 5 could be event type -> event notification
Server1.notify("dataChanged", 5);

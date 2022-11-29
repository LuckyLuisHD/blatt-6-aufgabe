// Event notification

var Server1 = {
  name: "Server1",
  data: 0,
  notify: function (notifier) {
    console.log(`Got notified by ${serverMap.get(notifier).name}`);
    this.data = serverMap.get(notifier).data;
    console.log(`Now my Data is ${this.data}`);
  },
};
var Server2 = {
  name: "Server2",
  data: 5,
  notify: function (notifier) {
    console.log(`Got notified by ${serverMap.get(notifier).name}`);
    this.data = serverMap.get(notifier).data;
    console.log(`Now my Data is ${this.data}`);
  },
};

var serverMap = new Map();
serverMap.set("Server1", Server1);
serverMap.set("Server2", Server2);

Server1.notify("Server2");
// only send reference to server
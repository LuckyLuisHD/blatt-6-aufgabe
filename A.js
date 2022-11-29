


var Server1 = {
    name: "Server1",
    data: 0,
    notify: function (data) {
        console.log(`Got notified with data: ${data}`)
        this.data = data;
    }
};
var Server2 = {
    name: "Server2",
    data: 5,
    notify: function (data) {
        console.log(`Got notified with data: ${data}`)
        this.data = data;
    }
};

var EventHandler = {
    name: "handler",
    dataLog: [],
    createEvent: function(notifier, data){
        Server1.notify(data)
        Server2.notify(data)
        this.dataLog.push({notifier,data})
        console.log(this.dataLog)
    }
}

EventHandler.createEvent(Server2, 5)
EventHandler.createEvent(Server1, 3)
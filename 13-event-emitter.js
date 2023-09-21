const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", () => {
  console.log("data received");
});

customEmitter.on("response", (name, age) => {
  console.log(`data received : user ${name} and age: ${age}`);
});

customEmitter.emit("response", "henry", 99);

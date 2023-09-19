// common Js is being used under the hood, every file is a module(by default)
// Modules - a way to split your code in order for it to be called when needed(only share minimum)

// import modules

const name = require("./4-names");

const sayHi = require("./5-utils");

const data = require("./6-alternate");

require("./7-mind_grenade");

sayHi("Jane");
sayHi("John");
sayHi(name.jack);

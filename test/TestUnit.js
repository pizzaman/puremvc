var fa = require("../src/facade/Facade.js");
var fade = fa.getInstance("game");
var fade2 = fa.getInstance("game");
var fade1 = fa.getInstance("game1");
console.log("ddddd %d",fade == fade1);

console.log("dddd11d %p",fade1);

var startupCommand = require("../src/command/SimpleCommand.js");
fade.registerCommand("start",startupCommand);
fade.sendNotification("start");
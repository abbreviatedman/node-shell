// jshint esversion: 6
var commands = require("./command.js");
// Output a prompt
process.stdout.write('prompt > ');

var userCommand = 'prompter';
commands[userCommand]();
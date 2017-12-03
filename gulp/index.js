/*
index.js
===========
fire it up ...
*/

var fs = require('fs');
var onlyScripts = require('./utilities/filter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

tasks.forEach(function(task) {
  require('./tasks/' + task);
});

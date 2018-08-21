const Chrono = require('../index.js');
//  lets me use the browser tests in node as well
//  to make sure it works in both envs
//  I DO NOT recommend doing this in production code
global.Chrono = Chrono;
require("./browser-test");

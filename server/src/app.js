const express = require('express');
const { configExpress } = require('./config/configExpress');
const { configRoutes } = require('./config/configRoutes');
const app = express();

start();
function start(){
    configExpress(app);
    configRoutes(app);
}
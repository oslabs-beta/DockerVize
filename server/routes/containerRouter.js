//router
//need to require child process to use exec
const express = require('express');
const containerRouter = express.Router();
const path = require('path');
const containerController = require('../controllers/containerController');
const promController = require('../controllers/promController');
const cadvisorController = require('../controllers/cadvisorController');

containerRouter.get('/exit', 
  containerController.stopContainers,
  (req, res) => {
    return res.status(200).send(res.locals.message);

  }
);

containerRouter.post('/stop', 
  containerController.stopOne,
  (req, res) => {
    return res.status(200).send(res.locals.message);

  }
);


containerRouter.get(
  '/',

  promController.restartProm,
  promController.startProm,
  cadvisorController.restartCadvisor,
  cadvisorController.startCadvisor,
  containerController.checkContainers,
  containerController.getContainers,

  (req, res) => {
    return res.status(200).send(res.locals.containers);
    //console.log('console.log in router', res.locals.containersInfo);
  }
);

module.exports = containerRouter;

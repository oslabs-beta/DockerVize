//router
//need to require child process to use exec
const express = require('express');
const containerRouter = express.Router();
const path = require('path');
const containerController = require('../controllers/containerController');
const promController = require('../controllers/promController');
const cadvisorController = require('../controllers/cadvisorController');

//exit prometheus and cadvisor containers
containerRouter.post(
  '/exit',
  containerController.stopContainers,
  (req, res) => {
    return res.status(200).send(res.locals.message);
  }
);

//Route to stop one container
containerRouter.post('/stop', containerController.stopOne, (req, res) => {
  return res.status(200).send(res.locals.message);
});

//Route to start one container
containerRouter.post('/start', containerController.startOne, (req, res) => {
  return res.status(200).send(res.locals.message);
});

//pause a single container
containerRouter.post('/pause', containerController.pauseOne, (req, res) => {
  return res.status(200).send(res.locals.message);
});

//unpause a single container
containerRouter.post('/unpause', containerController.unpauseOne, (req, res) => {
  return res.status(200).send(res.locals.message);
});

//start prometheus and cadvisor and get a list of all your containers
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
  }
);

module.exports = containerRouter;

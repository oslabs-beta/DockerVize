//router
//need to require child process to use exec
const express = require('express');
const containerRouter = express.Router();
const path = require('path');
const containerController = require('../controllers/containerController');
//const promContainerController = require('../controllers/promMetrics');
const cadvisorController = require('../controllers/cadvisorController');




containerRouter.get(
    '/',
    //console.log('We are at the container router'),
    //containerController.middlewareCheck,
    // console.log(typeof containerController.startSocat),
   // cadvisorController.restartCadvisor,

    containerController.startProm,
    containerController.startSocat,
    containerController.checkSocat,
    cadvisorController.startCadvisor,
    containerController.getContainers,
    (req, res) => {
      return res.status(200).send(res.locals.containers);
      //console.log('console.log in router', res.locals.containersInfo);
    }
  )

module.exports = containerRouter;

const express = require('express');
const metricsRouter = express.Router();
const path = require('path');
const metricsController = require('../controllers/metricsController');

//Route to get cpu information on containers. 
metricsRouter.post(
  '/cpu',
  metricsController.convertToUnixTime,
  metricsController.getCpu,

  (req, res) => {
    return res.status(200).send(res.locals.data);
  }
);

//Route to get memory metrics on containers
metricsRouter.post(
  '/',
  metricsController.convertToUnixTime,
  metricsController.getMemoryData,

  (req, res) => {
    return res.status(200).send(res.locals.data);
  }
);

module.exports = metricsRouter;

const express = require('express');
const metricsRouter = express.Router();
const path = require('path');
const metricsController = require('../controllers/metricsController')

metricsRouter.get('/', 
metricsController.getTotalCpu,

(req, res) => {

}
)





module.exports = metricsRouter;
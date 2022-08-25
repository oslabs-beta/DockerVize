const { exec, execSync } = require('child_process');
const awaitExec = require('await-exec');
const axios = require('axios');
const path = require('path');

const promController = {};

//Start running the prom controller if it exists.
promController.restartProm = async (req, res, next) => {
  //console.log('trying to start prometheus');
  exec('docker start prometheus', (error, stdout, stderr) => {
    if (!stderr) {
      res.locals.promRunning = 'yes'; 
    } return next();
  });
};

//Build and start prom container if it doesn't exist. If res.locals.promRunning equals yes then the container
//is already built and running.
promController.startProm = async (req, res, next) => {
  if (res.locals.promRunning === 'yes') return next();
  else {
    //console.log('Building prom because it wasnt found');
    await awaitExec(
      `docker run --name prometheus -p 9090:9090 -d -v ${path.resolve(
        __dirname,
        '../assets/prometheus.yaml'
      )}:/etc/prometheus/prometheus.yml prom/prometheus`,
      (error, stdout, stderr) => {}
    );
    return next();
  }
};

module.exports = promController;

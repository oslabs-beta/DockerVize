const { exec, execSync } = require('child_process');
const awaitExec = require('await-exec');
const axios = require('axios');
const path = require('path');

const promController = {};

promController.restartProm = async (req, res, next) => {
  console.log('trying to start prometheus')
      exec ('docker start prometheus', (error, stdout, stderr) => {
      if (!stderr) {
        res.locals.promRunning = 'yes';
        return next();
      }
      else {
       console.log('reg error', error);
       console.log('stdout', stdout);
       console.log('stderr', stderr);
        return next ();
      }
      
      
    }); 
    
}


promController.startProm = async (req, res, next) => {  
    if (res.locals.promRunning === 'yes') return next();
    else {
      console.log('Building prom because it wasnt found');
     await awaitExec(`docker run --name prometheus -p 9090:9090 -d -v ${path.resolve(__dirname, '../assets/prometheus.yaml')}:/etc/prometheus/prometheus.yml prom/prometheus`, (error, stdout, stderr) => {});  
     return next();
    }
    
    
  }

module.exports = promController;
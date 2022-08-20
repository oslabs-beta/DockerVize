//controllers
const { exec, execSync } = require('child_process');
const awaitExec = require('await-exec');
//const execSync = require('exec-sync');
const axios = require('axios');
const path = require('path');
const containerController = {};


// This is the exec call to get the container info.
containerController.getContainers = async (req, res, next) => {
  console.log('Running getContainers middleware...');
  const containerInfo = [];

  //get all the data and from this command and filter out the stuff you don't need
  let rawData = await awaitExec(`docker ps --all --quiet`);
  rawData = rawData.stdout;

  const getDockerIds = (rawData) => {
    const dockerIds = [];
    let dockerId = [];

    for (let i = 0; i < rawData.length; i++) {
      if (rawData[i] === '\n') {
        dockerIds.push(dockerId.join(''));
        dockerId = [];
        continue;
      }
      dockerId.push(rawData[i]);
    }
    return dockerIds;
  };
  const dockerIds = getDockerIds(rawData);
  // console.log(dockerIds);

  for (let i = 0; i < dockerIds.length; i++) {
    const containerID = dockerIds[i];
    const containerObj = {};
    const output = await awaitExec(`docker inspect ${containerID}`);

    for (const key in output) {
      if (key === 'stdout') {
        const stdoutObj = JSON.parse(output[key]);
        containerObj.id = containerID;
        containerObj.name = stdoutObj[0].Name;
        containerObj.state = stdoutObj[0].State.Status;
        containerInfo.push(containerObj);
      }
    }
  }

  //save the correct info on res locals
  res.locals.containers = containerInfo;
  return next();
};


//here we check to see if prometheus and cadvisor are running before we move on to the next piece of middleware
containerController.checkContainers = async (req, res, next) => {
  let counter = 0;
  console.log('we are checking for cadvisor and prometheus');
  //helper function to check if the containers are running or not
  const containerCheck = () => {
    //setTimeout because it can take a while for the containers to boot up
    setTimeout(async () => {
      //wait a maximum of 20 seconds for the containers to boot up
      if (counter === 100) {
        //if it isn't booted up in 20 seconds send this error message
        const err = {
          log: 'Check containers middleware timed out',
          status: 500,
          message: {
            err: 'Container loading timed out. Please check if Docker Daemon or Docker Dashtop is running.',
          },
        };
        return next(err);
      } else {
        const result = exec ('docker ps', (error, stdout, stderr) => {
          //check if the containers are running
          if (stdout.includes('cadvisor') && stdout.includes('prometheus')) {
            return next();
          }
          //if its not running, check again
          else {
            counter++;
            containerCheck();
          }
        });
      }
    }, 200);
  };
  containerCheck();
}

//For container function exec calls standard error handling isn't appropriate.
//We've handled errors by creating variable to display possible exec errors.

//exec call to stop prometheus and docker
containerController.stopContainers = async (req, res, next) => {
  exec('docker stop prometheus cadvisor', (error, stdout, stderr) => {
    if (error || stderr){
      const errorLog = error || stderr;
      const err = {
        log: `Error processing stop call to the prometheus and cadvisor containers.${errorLog}`,
        status: 405,
        message: 'Unable to stop the prometheus and cadvisor containers'
      }
      return next(err);
    }
    else {
      res.locals.message = 'Cadvisor and prometheus containers have stopped'
      return next();

    }
  
});
}


//stop one container
containerController.stopOne = async (req, res, next) => {
  const { name } = req.body;
  exec(`docker stop ${name}`, (error, stdout, stderr) => {
    if (error || stderr){
      const errorLog = error || stderr;
      const err = {
        log: `Error processing stop call to the container.${errorLog}`,
        status: 405,
        message: 'Unable to stop the container.'
      }
      return next(err);
    }
    else {
      res.locals.message = 'Container has stopped'
      return next();

    }
  
});
}

//start one container
containerController.startOne = async (req, res, next) => {
  const { name } = req.body;
  exec(`docker start ${name}`, (error, stdout, stderr) => {
    if (error || stderr){
      const errorLog = error || stderr;
      const err = {
        log: `Error processing start call to the container.${errorLog}`,
        status: 405,
        message: 'Unable to start the container.'
      }
      return next(err);
    }
    else {
      res.locals.message = 'Starting container.'
      return next();

    }
  
})
 
}

//pause one container
containerController.pauseOne = async (req, res, next) => {
  const { name } = req.body;
  exec(`docker pause ${name}`, (error, stdout, stderr) => {
    if (error || stderr){
      const errorLog = error || stderr;
      const err = {
        log: `Error processing pause call to the container.${errorLog}`,
        status: 405,
        message: 'Unable to pause the container.'
      }
      return next(err);
    }
    else {
      res.locals.message = 'Container has paused'
      return next();

    }
  
})
}


//unpause one container
containerController.unpauseOne = async (req, res, next) => {
  const { name } = req.body;
  exec(`docker unpause ${name}`, (error, stdout, stderr) => {
    if (error || stderr){
      const errorLog = error || stderr;
      const err = {
        log: `Error processing unpause call to the container.${errorLog}`,
        status: 405,
        message: 'Unable to unpause the container.'
      }
      return next(err);
    }
    else {
      res.locals.message = 'Container has paused'
      return next();

    }
  
})
}


module.exports = containerController

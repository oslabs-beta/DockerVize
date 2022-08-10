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
        // console.log(`${key}`);
        const stdoutObj = JSON.parse(output[key]);
        // console.log(stdoutObj);
        containerObj.id = containerID;
        containerObj.name = stdoutObj[0].Name;
        containerObj.state = stdoutObj[0].State.Status;
        containerInfo.push(containerObj);
      }
    }

    // containerObj.id = containerID;
    // containerObj.name = stdoutObj[0].Name;
    // containerObj.status = stdoutObj[0].State.Status;

    // console.log(output);
  }
  // console.log(containerInfo);
  res.locals.containers = containerInfo;
  return next();
};

containerController.checkContainers = async (req, res, next) => {
  let counter = 0;
  console.log('we are checking for cadvisor and prometheus');
  //helper function to check if the containers are running or not
  const containerCheck = () => {
    //setTimeout because it can take a while for the containers to boot up
    setTimeout(async () => {
      console.log('Weve reached the container check helper function')
      console.log('this is the counter', counter);
      //wait a maximum of 20 seconds for the containers to boot up
      if (counter === 100) {
        console.log('Weve entered the if statement where counter is equal to 100');
        //console.log('counter has reached 10');
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
        console.log('Weve entered the else statement when counter is not equal to 100');
        const result = exec ('docker ps', (error, stdout, stderr) => {
          //check if the containers are running
         
          if (stdout.includes('cadvisor') && stdout.includes('prometheus')) {
            return next();
          }
          //if its not running, check again
          else {
            counter++;
            //console.log(counter);
            containerCheck();
          }
        });
      }
    }, 200);
  };
  containerCheck();
}

containerController.stopContainers = async (req, res, next) => {
  exec('docker stop prometheus docker stop cadvisor');
  console.log('stopping prom and cadvisor')
  res.locals.message = 'Cadvisor and prometheus containers have stopped'
  return next();
}

containerController.stopOne = async (req, res, next) => {
  const { name } = req.body;
  exec(`docker stop ${name}`)
  res.locals.message = 'Stopping Container'
  return next();
}

module.exports = containerController;

const { exec, execSync } = require('child_process');
const awaitExec = require('await-exec');
//const execSync = require('exec-sync');
const axios = require('axios');
const path = require('path');

const socatController ={};

socatController.startSocat = async (req, res, next) => {
    console.log('We are at the startSocat middleware (SECOND)');
    try {
      console.log('Socat starting');
      await exec(
        `docker run -d -v /var/run/docker.sock:/var/run/docker.sock --name socat -p 127.0.0.1:2375:2375 bobrik/socat TCP-LISTEN:2375,fork UNIX-CONNECT:/var/run/docker.sock`
      );
      return next();
    } catch (err) {
      console.log('error starting Socat');
      return next(err);
    }
  };
  // console.log(typeof socatController.startSocat);
  
  socatController.checkSocat = async (req, res, next) => {
    let counter = 0;
    console.log('we are checking for socat');
    //helper function to check if socat is running or not
    const socatCheck = () => {
      //setTimeout because it can take a while for socat to boot up
      setTimeout(async () => {
        //wait a maximum of 20 seconds for the socat to boot up
        if (counter === 100) {
          //console.log('counter has reached 10');
          //if it isn't booted up in 20 seconds send this error message
          const err = {
            log: 'Check socat middleware timed out',
            status: 500,
            message: {
              err: 'Container loading timed out. Please check if Docker Daemon or Docker Dashtop is running.',
            },
          };
          return next(err);
        } else {
          await exec('docker ps', (error, stdout, stderr) => {
            //check if the socat container is running
            if (stdout.includes('socat')) {
              return next();
            }
            //if its not running, check again
            else if (!stdout.includes('socat')) {
              counter++;
              //console.log(counter);
              socatCheck();
            }
          });
        }
      }, 200);
    };
    socatCheck();
  };
  
  socatController.getContainersSoCat = async (req, res, next) => {
    console.log('We are at the get containers middleware');
    //get all the data from the api and save it in result
    const result = await axios.get(
      'http://localhost:2375/containers/json?all=true'
    );
    //console.log(result.data);
    //collect the needed info to render containers
    let newArr = [];
    for (let i = 0; i < result.data.length; i++) {
      let newObj = {};
      newObj.id = result.data[i].Id;
      newObj.name = result.data[i].Names[0];
      newObj.state = result.data[i].State;
      newArr.push(newObj);
    }
    //save the info on res locals containers
    res.locals.containers = newArr;
    // console.log(newArr);
    return next();
  };
  
  //Standard middleware error handling won't work here
  socatController.restartSocat = async (req, res, next) => {
    exec('docker start socat');
    return next();
  }
  
  //docker run -d -v /var/run/docker.sock:/var/run/docker.sock --name socat -p 127.0.0.1:2375:2375 bobrik/socat TCP-LISTEN:2375,fork UNIX-CONNECT:/var/run/docker.sock
  socatController.startSocat = async (req, res, next) => {
    if (res.locals.running) return next();
    await exec(`docker run -d -v /var/run/docker.sock:/var/run/docker.sock --name socat -p 127.0.0.1:2375:2375 bobrik/socat TCP-LISTEN:2375,fork UNIX-CONNECT:/var/run/docker.sock`, (error, stdout, stderr) => {});
    return next();
  }
  socatController.middlewareCheck = (req, res, next) => {
      try {
        res.locals.message = 'We are at the startSocat middlewares';
        return next();
      } catch (error) {
        return next({
          log: `Error in socatController.middlewareCheck: ${error}`,
          message: { err: `Can't complete middlewareCheck` },
        });
      }
  }

  module.exports = socatController;
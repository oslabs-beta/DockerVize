//controllers
const { exec, execSync } = require('child_process');
const awaitExec = require('await-exec');
//const execSync = require('exec-sync');
const axios = require('axios');

const containerController = {};

//Standard middleware error handling won't work here
// conController.restartSocat = async (req, res, next) => {
//   exec('docker start socat');
//   return next();
// }

// //docker run -d -v /var/run/docker.sock:/var/run/docker.sock --name socat -p 127.0.0.1:2375:2375 bobrik/socat TCP-LISTEN:2375,fork UNIX-CONNECT:/var/run/docker.sock
// conController.startSocat = async (req, res, next) => {
//   if (res.locals.running) return next();
//   await exec(`docker run -d -v /var/run/docker.sock:/var/run/docker.sock --name socat -p 127.0.0.1:2375:2375 bobrik/socat TCP-LISTEN:2375,fork UNIX-CONNECT:/var/run/docker.sock`, (error, stdout, stderr) => {});
//   return next();
// }
// containerController.middlewareCheck = (req, res, next) => {
//     try {
//       res.locals.message = 'We are at the startSocat middlewares';
//       return next();
//     } catch (error) {
//       return next({
//         log: `Error in containerController.middlewareCheck: ${error}`,
//         message: { err: `Can't complete middlewareCheck` },
//       });
//     }
// }

containerController.startSocat = async (req, res, next) => {
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
// console.log(typeof containerController.startSocat);

containerController.checkSocat = async (req, res, next) => {
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
//   try{
//       await exec('docker ps', (error, stdout, stderr) => {
//           if(stdout.includes('socat'))return next();
//           else{

//           }
//       })
//   }catch(err){

//   }

containerController.getContainers = async (req, res, next) => {
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

// This is the exec call to get the container info.
containerController.getContainers2 = async (req, res, next) => {
  console.log('Running getContainers2 middleware...');
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
  console.log(containerInfo);
  res.locals.containers = containerInfo;
  return next();
};

module.exports = containerController;

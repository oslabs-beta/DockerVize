const { exec } = require('child_process');
const awaitExec = require('await-exec');
const path = require('path');
//Running container advisor (cadvisor) to expose Docker container metrics to Prometheus

const cadvisorController = {};

//Standard middleware error handling won't work here
// cadvisorController.restartCadvisor = async (req, res, next) => {
//   exec('docker start cadvisor');
//   return next();
// };

//try to start cadvisor if the container is already built on docker
cadvisorController.restartCadvisor = async (req, res, next) => {
  console.log('trying to start cadvisor')

      //try to run the cadvisor container
      exec ('docker start cadvisor', (error, stdout, stderr) => {
      if (!stderr) {
        //if there is no error, that means our command was succesful and cadvisor is starting
        //set res.locals to skip the build process
        res.locals.cadvisorRunning = 'yes';
        return next();
      }
      else {
        //if we get an error log it and call next, invoking the next piece of middleware that will build and run the container for you
       console.log('stderr', stderr);
        return next ();
      }
      
      
    }); 
    
}


//middleware to build and run cadvisor
cadvisorController.startCadvisor = async (req, res, next) => {
  //if cadvisor is already running return next
  if (res.locals.cadvisorRunning) return next();
  //otherwise check the process platform and run the command
  if (process.platform === 'linux' || process.platform === 'win32') {
    await awaitExec(
      `docker run --volume=/sys:/sys:ro --volume=/cgroup:/cgroup:ro --publish=9101:8080 --detach=true --name=cadvisor gcr.io/cadvisor/cadvisor:latest`,
      (error, stdout, stderr) => {}
    );
  } else {
    await awaitExec(
      `docker run \
      --volume=/:/rootfs:ro \
      --volume=/var/run:/var/run:ro \
      --volume=/sys:/sys:ro \
      --volume=/var/lib/docker/:/var/lib/docker:ro \
      --volume=/dev/disk/:/dev/disk:ro \
      --publish=9101:8080 \
      --detach=true \
      --name=cadvisor \
      --privileged \
      --device=/dev/kmsg \
      gcr.io/cadvisor/cadvisor:v0.44.1-test
    `,
      (error, stdout, stderr) => {}
    );
  }

  return next();
};

module.exports = cadvisorController;


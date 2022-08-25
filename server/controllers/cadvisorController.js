const { exec } = require('child_process');
const awaitExec = require('await-exec');
const path = require('path');

//Running container advisor (cadvisor) to expose Docker container metrics to Prometheus
const cadvisorController = {};

//try to start cadvisor if the container is already built on docker
cadvisorController.restartCadvisor = async (req, res, next) => {
  //Uncomment console log below to check middleware routing
  //console.log('Trying to start cadvisor');

  //try to run the cadvisor container
  exec('docker start cadvisor', (error, stdout, stderr) => {
    if (!stderr) {
      //if there is no error, that means our command was succesful and cadvisor is starting
      //set res.locals to skip the build process
      res.locals.cadvisorRunning = 'yes';
      
    } return next();
    
  });
};

//middleware to build and run cadvisor
cadvisorController.startCadvisor = async (req, res, next) => {
  //if cadvisor is already running - move on to next middleware
  if (res.locals.cadvisorRunning) return next();
  //otherwise check the process platform and run the command
  if (process.platform === 'linux' || process.platform === 'win32') {
    await awaitExec(
      `docker run --volume=/sys:/sys:ro --volume=/cgroup:/cgroup:ro --publish=9101:8080 --detach=true --name=cadvisor gcr.io/cadvisor/cadvisor:latest`,
      (error, stdout, stderr) => {}
    );
  } else {
    //docker command for OS operating systems
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

const { exec } = require('child_process');
const path = require('path');
//Running container advisor (cadvisor) to expose Docker container metrics to Prometheus

const cadvisorController = {};

//Standard middleware error handling won't work here
// cadvisorController.restartCadvisor = async (req, res, next) => {
//   exec('docker start cadvisor');
//   return next();
// };


cadvisorController.startCadvisor = async (req, res, next) => {
  if (res.locals.cadvRunning) return next();
  if (process.platform === 'linux' || process.platform === 'win32') {
    await exec(
      `docker run --volume=/sys:/sys:ro --volume=/cgroup:/cgroup:ro --publish=9101:8080 --detach=true --name=cadvisor gcr.io/cadvisor/cadvisor:latest`,
      (error, stdout, stderr) => {}
    );
  } else {
    await exec(
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


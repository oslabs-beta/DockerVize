const { exec, spawn } = require('child_process');
const axios = require('axios');

const metricsController = {};

// metricsController.getTotalCpu = async (req, res, next) => {
//     try {
//         //const { id } = req.query;
//         const stats  = await axios.get(`http://localhost:9101/api/v1.3/containers/docker/`);

//         const userCpu = stats.data.stats[0].cpu.usage.user;
//         console.log('user cpu', userCpu);

//         const totalCpu = stats.data.stats[0].cpu.usage.total;

//         console.log('total Cpu', totalCpu);
//         const cpuPercentage = Math.round((userCpu / totalCpu) * 100);
//         console.log('this is the user percentage of the cpu', cpuPercentage);

//     } catch(err) {
//         console.log(`${err}`);
//     }
// }
metricsController.convertToUnixTime = (req, res, next) => {
  try {
    let currentTime = new Date().valueOf();
    currentTime = currentTime / 1000;
    const start = currentTime - req.body.secondsPassed;
    res.locals.end = currentTime;
    res.locals.start = start;
    return next();
  } catch (error) {
    console.log('metricsController error: convertToUnixTime method');
    return next(err);
  }
};

metricsController.getMemoryData = async (req, res, next) => {
  try {
    const stats = await axios.get(
      `http://localhost:9090/api/v1/query_range?query=${req.body.query}&start=${res.locals.start}&end=${res.locals.end}&step=${req.body.interval}`
    );

    let dockerData = [];
    for (let i = 0; i < stats.data.data.result.length; i++) {
      if (
        stats.data.data.result[i]['metric']['id'].slice(0, 8) === '/docker/' &&
        stats.data.data.result[i]['metric']['id'].slice() !== '/docker/buildx'
      ) {
        dockerData.push(stats.data.data.result[i]);
      }
    }
    // console.log('data of each docker container: ', dockerData);

    let totalData = {};
    for (let i = 0; i < dockerData.length; i++) {
      dockerData[i].values.forEach((dataPairArr) => {
        if (!(dataPairArr[0] in totalData)) {
          totalData[dataPairArr[0]] = 0;
        }
        totalData[dataPairArr[0]] += Number(dataPairArr[1]);
      });
    }
    // console.log('Total data for only docker containers: ', totalData);

    // res.locals.data = stats.data.data.result;
    res.locals.data = dockerData;
    next();
  } catch (err) {
    // console.log('metricsController error: getData method');
    return next(err);
  }
};

metricsController.getCpu = async (req, res, next) => {
  //this is req.body.query = rate(container_cpu_user_seconds_total{id=~"/docker.*"}[30s])*100
  // const q = 'rate(container_cpu_user_seconds_total{id=~"/docker.*"}[30s])*100';
  // const int = '15';
  // const start = res.locals.end - 300;
  console.log('we are at the cpu metrics middleware.');
  console.log('start', res.locals.start, 'res.locals.end', res.locals.end);
  try {
    const stats = await axios.get(
      `http://localhost:9090/api/v1/query_range?query=${req.body.query}&start=${res.locals.start}&end=${res.locals.end}&step=${req.body.interval}`
    );

    const cpuArray = [];

    for (let i = 0; i < stats.data.data.result.length; i++) {
      if (
        stats.data.data.result[i]['metric']['id'].slice() !== '/docker/buildx'
      ) {
        const dataObj = {};
        dataObj.id = stats.data.data.result[i].metric.id;
        dataObj.values = stats.data.data.result[i].values;
        console.log('dataObj', dataObj);
        cpuArray.push(dataObj);
        console.log('this is the cpu array', cpuArray);
      }
    }
    res.locals.data = cpuArray;
    return next();
  } catch (err) {
    console.log('metricsController error: getData method');
    return next(err);
  }
};

module.exports = metricsController;

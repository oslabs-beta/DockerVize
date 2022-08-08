const { exec, spawn } = require('child_process');
const axios = require('axios');

const metricsController = {};

metricsController.getTotalCpu = async (req, res, next) => {
    try {
        //const { id } = req.query;
        const stats  = await axios.get(`http://localhost:9101/api/v1.3/containers/docker/`);
      
        const userCpu = stats.data.stats[0].cpu.usage.user;
        console.log('user cpu', userCpu);
     
        const totalCpu = stats.data.stats[0].cpu.usage.total;

        console.log('total Cpu', totalCpu);
        const cpuPercentage = Math.round((userCpu / totalCpu) * 100);
        console.log('this is the user percentage of the cpu', cpuPercentage);

    } catch(err) {
        console.log(`${err}`);
    }
}




module.exports = metricsController;

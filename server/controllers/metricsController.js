const { exec, spawn } = require('child_process');
const axios = require('axios');

const metricsController = {};


metricsController.getData = async (req, res, next) => {
    try {
        //const { id } = req.query;
        const stats  = await axios.get(`http://localhost:9101/api/v1.3/containers/docker/be5f4ecd1d3171837c2432252c947fe2b082851cc3d55c6b06dde779d78d9ac8`);
        console.log('this is cpu', stats.data.stats[0].cpu.usage);   
        console.log('this is memory', stats.data.stats[0].memory.usage); 
    } catch(err) {
        console.log(`${err}`);
    }
}




module.exports = metricsController;
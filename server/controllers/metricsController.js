const { exec } = require('child_process');
const axios = require('axios');

const metricsController = {};


metricsController.getToggledData = async (req, res, next) => {
    try {
        const { id } = req.query;
        const stats = await axios.get(`http://localhost:2375/containers/${id}/stats?stream=false`);
        console.log(stats.data.cpu_stats); 
        console.log(stats.data.memory_stats);
    } catch(err) {
        console.log('error');
    }
}




module.exports = metricsController;
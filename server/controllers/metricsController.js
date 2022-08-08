const { exec, spawn } = require('child_process');
const axios = require('axios');

const metricsController = {};

metricsController.getData = async (req, res, next) => {
  try {
    //const { id } = req.query;
    const stats = await axios.get(`http://localhost:9101/containers`);
    // console.log('this is the entire stats object', stats.data);
  } catch (err) {
    console.log(`${err}`);
  }
};

module.exports = metricsController;

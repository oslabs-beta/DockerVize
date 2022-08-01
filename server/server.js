//main server js file here
const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
const cors = require('cors');

//import routers here
//router to get docker data


//handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

//serve static files
app.use(express.static(path.resolve(__dirname, '../dist')));

//catch-all routh handler for any requests to an unknown route
app.get('*', (req, res) => {
    return res.status(404).send('This is an unknown URL.');
  })

  
//global error handlings
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught an unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });

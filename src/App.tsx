import React from 'react';
// import { Routes, Route } from 'react-router-dom';
import DockerContainers from './containers/dockerContainers';
import Header from './containers/header';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <DockerContainers />
        {/* <MetricContainers/> */}
      </div>
    </>
  );
};

export default App;

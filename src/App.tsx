import React from 'react';
import DockerContainers from './containers/dockerContainers';
import Header from './containers/header';
import MetricsContainers from './containers/metricsContainers';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className='containers'>
        <DockerContainers />
        <MetricsContainers />
      </div>
    </>
  );
};

export default App;

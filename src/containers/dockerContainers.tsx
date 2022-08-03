import React from 'react';
import Container from './container';

const DockerContainers: React.FC = () => {
  // const listOfContainers: React.FC = <Container />;

  return (
    <div className='docker-container'>
      <div>Docker Containers</div>
      {/* <div>{listOfContainers}</div> */}
      <Container />
      <Container />
      <Container />
    </div>
  );
};

export default DockerContainers;

import React from 'react';
// import Container from '../components/container';
import { useGetContainersQuery } from '../services/containerQuery';

const DockerContainers: React.FC = () => {
  const { data, error, isLoading } = useGetContainersQuery();
  console.log('Data: ', data);
  console.log('Error: ', error);

  // const listOfContainers: React.ReactElement[] = [];
  // if (data) {
  //   for (const el of data) {
  //     listOfContainers.push(<Container containerData:any={el} />);
  //   }
  // }

  // let test;
  // if (data && data[0]) {
  //   test = data[0][id];
  // } else {
  //   test = {};
  // }
  return (
    <div className='docker-container'>
      <div>Docker Containers</div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {/* <div>{listOfContainers}</div> */}
          <div>Hi</div>
        </>
      ) : null}
    </div>
  );
};

export default DockerContainers;

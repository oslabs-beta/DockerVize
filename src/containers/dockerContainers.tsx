import React from 'react';
import Container from '../components/container';
import {
  useGetContainersQuery,
  ObjectElement,
} from '../services/containerQuery';

const DockerContainers: React.FC = () => {
  const { data, error, isLoading } = useGetContainersQuery();

  console.log('Data: ', data);
  console.log('Error: ', error);

  return (
    <div className='docker-container'>
      <div>Docker Containers</div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          {data.map((container: ObjectElement) => {
            return (
              <Container
                id={container.id}
                name={container.name}
                state={container.state}
              />
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default DockerContainers;

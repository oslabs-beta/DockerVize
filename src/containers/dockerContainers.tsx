import React from 'react';
import Container from '../components/container';
import { useGetContainersQuery } from '../services/containerQuery';

import { ObjectElement } from '../types';

import { useDispatch } from 'react-redux';
import { getContainerStates } from '../reducers/containerStatusSlice';

const DockerContainers: React.FC = () => {
  const { data, error, isLoading } = useGetContainersQuery();
  console.log(data);
  const dispatch = useDispatch();
  if (data) dispatch(getContainerStates(data));

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

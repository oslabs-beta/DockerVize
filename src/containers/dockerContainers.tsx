import React from 'react';
import Container from '../components/container';
import {
  useGetContainersQuery,
  ObjectElement,
} from '../services/containerQuery';

import { useDispatch } from 'react-redux';
import { getStates } from '../reducers/containerStatusSlice';

const DockerContainers: React.FC = () => {
  const { data, error, isLoading } = useGetContainersQuery();

  const dispatch = useDispatch();
  if (data) dispatch(getStates(data));

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

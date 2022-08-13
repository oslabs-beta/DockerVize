import React from 'react';
import Container from '../components/container';
import { useGetContainersQuery } from '../services/containerQuery';

import { ObjectElement } from '../types';

import { useDispatch } from 'react-redux';
import { getContainerStates } from '../reducers/containerStatusSlice';

const DockerContainers: React.FC = () => {
  const { data, error, isLoading } = useGetContainersQuery();

  const dispatch = useDispatch();
  if (data) dispatch(getContainerStates(data));

  return (
    <div className='docker-container'>
      {error ? (
        <>
          <p>Error: Could not connect to Docker.</p>
          <br />
          <ol>
            <li>Open and log into Docker Desktop application.</li>
            <li>
              Configure shared paths in Docker Desktop (Settings &gt; Resources
              &gt; File Sharing) to include the prometheus.yaml file path
              (dockervize &gt; server &gt; assets)
            </li>
          </ol>
        </>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <div>Docker Containers</div>
          {data.map((container: ObjectElement) => {
            return (
              <Container
                id={container.id}
                name={container.name}
                state={container.state}
                key={'key' + container.id}
              />
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default DockerContainers;

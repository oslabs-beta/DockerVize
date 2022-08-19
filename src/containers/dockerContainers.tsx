import React, { useEffect } from 'react';
import Container from '../components/container';
import { useGetContainersQuery } from '../services/containerQuery';

import { ObjectElement } from '../types';

import { useDispatch } from 'react-redux';
import {
  getContainerStates,
  toggleDataOff,
} from '../reducers/containerStatusSlice';
// import { AllStates } from '../types';

const DockerContainers: React.FC = () => {
  let { data, error, isLoading } = useGetContainersQuery();

  const dispatch = useDispatch();
  if (data) dispatch(getContainerStates(data));

  useEffect(() => {
    setInterval(async () => {
      const rawData = await fetch(`http://localhost:3000/container/`, {
        headers: {
          'Content-Type': 'Application/JSON',
        },
      }).then((response) => response.json());
      // console.log('RawData: ', rawData);
      if (rawData !== data) data = rawData;

      if (data) {
        dispatch(getContainerStates(data));

        for (let container of data) {
          if (container.state !== 'running')
            dispatch(toggleDataOff(container.id));
        }
      }
      console.log('data: ', data);
    }, 5_000);
  });

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

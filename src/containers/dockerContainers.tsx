import React, { useEffect } from 'react';
import Container from '../components/container';
import { useGetContainersQuery } from '../services/containerQuery';
import { ObjectElement } from '../types';
import { useDispatch } from 'react-redux';
import {
  getContainerStates,
  toggleDataOff,
} from '../reducers/containerStatusSlice';

const DockerContainers: React.FC = () => {

  //Invoke get container query to grab raw container status from backend
  let { data, error, isLoading } = useGetContainersQuery();

  //Update Global state using received data from backend
  const dispatch = useDispatch();
  if (data) dispatch(getContainerStates(data));

  //Live updating of containers - queries backend to see if container status has changed
  useEffect(() => {
    setInterval(async () => {
      const rawData = await fetch(`http://localhost:3000/container/`, {
        headers: {
          'Content-Type': 'Application/JSON',
        },
      }).then((response) => response.json());
      if (rawData !== data) data = rawData;
      if (data) {
        dispatch(getContainerStates(data));
        for (let container of data) {
          if (container.state !== 'running')
            dispatch(toggleDataOff(container.id));
        }
      }
    //Frequency of re-renders
    }, 10_000);
  });

  //Conditional rendering based on query results
  return (
    <div className='docker-container'>
      {//If query fails:
      error ? (
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
        //While query is loading:
      ) : isLoading ? (
        <>Loading...</>
        //If query succeeds: 
      ) : data ? (
        <>
          <div className='container-header'>Docker Containers</div>
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

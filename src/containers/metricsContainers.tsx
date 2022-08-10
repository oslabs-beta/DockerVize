import React from 'react';

import { useGetContainersQuery } from '../services/containerQuery';

import { useDispatch } from 'react-redux';
import { getContainerStates } from '../reducers/containerStatusSlice';
import MemoryLineGraph from '../components/memoryLineGraph';

const MetricsContainers: React.FC = () => {
  const { data, error, isLoading } = useGetContainersQuery();

  const dispatch = useDispatch();
  if (data) dispatch(getContainerStates(data));

  return (
    <div className='docker-container'>
      <div>Memory Usage</div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <MemoryLineGraph />
        </>
      ) : null}
    </div>
  );
};

export default MetricsContainers;

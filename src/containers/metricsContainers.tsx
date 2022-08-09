import React from 'react';

import { useGetContainersQuery } from '../services/containerQuery';

import { useDispatch } from 'react-redux';
import { getContainerStates } from '../reducers/containerStatusSlice';
import MemoryLineGraph from '../components/memoryLineGraph';

const MetricsContainers: React.FC = () => {
  const { data, error, isLoading } = useGetContainersQuery();
  console.log(data);
  const dispatch = useDispatch();
  if (data) dispatch(getContainerStates(data));

  return (
    <div className='docker-container'>
      <div>Metrics Containers</div>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <canvas id='myChart' width='500' height='600'></canvas>
          <MemoryLineGraph />
        </>
      ) : null}
    </div>
  );
};

export default MetricsContainers;

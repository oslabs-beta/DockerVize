import React from 'react';

import { useGetContainersQuery } from '../services/containerQuery';

import { useDispatch } from 'react-redux';
import { getContainerStates } from '../reducers/containerStatusSlice';
import MemoryLineGraph from '../components/memoryLineGraph';
import CpuLineGraph from '../components/cpuLineGraph';

const MetricsContainers: React.FC = () => {
  const { data, error, isLoading } = useGetContainersQuery();

  const dispatch = useDispatch();
  if (data) dispatch(getContainerStates(data));

  return (
    <div className='metrics-container'>
      <div></div>
      {error ? (
        <>Metrics error!!</>
      ) : isLoading ? (
        <>Metrics Loading...</>
      ) : data ? (
        <>
          <CpuLineGraph />
          <div style={{ height: '20px', width: '20px' }}></div>
          <MemoryLineGraph />
        </>
      ) : null}
    </div>
  );
};

export default MetricsContainers;

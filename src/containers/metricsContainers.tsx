import React from 'react';

import { useGetContainersQuery } from '../services/containerQuery';

import { useDispatch } from 'react-redux';
import { getContainerStates } from '../reducers/containerStatusSlice';
import MemoryLineGraph from '../components/memoryLineGraph';
import CpuLineGraph from '../components/cpuLineGraph';
import MemoryTotalGraph from '../components/memoryTotalGraph';
import CpuTotalGraph from '../components/cpuTotalGraph';

const MetricsContainers: React.FC = () => {
  const { data, error, isLoading } = useGetContainersQuery();

  const dispatch = useDispatch();
  if (data) dispatch(getContainerStates(data));

  return (
    <div className='metrics-container'>
      {error ? (
        <></>
      ) : isLoading ? (
        <>Metrics Loading...</>
      ) : data ? (
        <div className='inner-metrics-container'>
          <div className='left-metrics'>
            <CpuLineGraph />
            <CpuTotalGraph />
          </div>

          <div className='right-metrics'>
            <MemoryLineGraph />
            <MemoryTotalGraph />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MetricsContainers;

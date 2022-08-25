import React from 'react';
import { useGetContainersQuery } from '../services/containerQuery';
import { useDispatch } from 'react-redux';
import { getContainerStates } from '../reducers/containerStatusSlice';
import MemoryLineGraph from '../components/memoryLineGraph';
import CpuLineGraph from '../components/cpuLineGraph';
import MemoryTotalGraph from '../components/memoryTotalGraph';
import CpuTotalGraph from '../components/cpuTotalGraph';

const MetricsContainers: React.FC = () => {

  //Invoke get container query to grab raw container status from backend
  const { data, error, isLoading } = useGetContainersQuery();

  //Update Global state using received data from backend
  const dispatch = useDispatch();
  if (data) dispatch(getContainerStates(data));

  //Conditional rendering based on query results
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

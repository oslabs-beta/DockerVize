import React from 'react';
import { ObjectElement } from '../types';
import { useDispatch } from 'react-redux';
import {
  toggleStatus,
  toggleData,
  addMemory,
  deleteMemory,
  addCpu,
  deleteCpu,
} from '../reducers/containerStatusSlice';
import {
  useGetCPUDataQuery,
  useGetMemoryDataQuery,
} from '../services/containerQuery';

const Container: React.FC<ObjectElement> = (props) => {
  const { name, state, id } = props;

  const dispatch = useDispatch();

  // let { data } = useGetMemoryDataQuery(undefined, { pollingInterval: 3000 });
  let { data } = useGetMemoryDataQuery();

  let cpuData = useGetCPUDataQuery().data;

  if (cpuData) {
    console.log('cpu:', cpuData[0].id);
  }

  const updateMemoryState = (id: string) => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].metric.id.slice(8, 20) === id) {
          return data[i];
        }
      }
    }
    return;
  };

  const updateCpuState = (id: string) => {
    if (cpuData) {
      for (let i = 0; i < cpuData.length; i++) {
        if (cpuData && cpuData[i].id) {
          if (cpuData[i].id.slice(8, 20) === id) {
            return cpuData[i];
          }
        }
      }
    }
    return;
  };

  return (
    <div className='container'>
      <div>
        <span>{name}</span>
      </div>
      <div className='btns'>
        <div className='ea-btn'>
          <div className='toggleText'>On/Off</div>
          <label
            className='form-switch'
            id={`onButton${id}`}
            onChange={() => {
              dispatch(toggleStatus(id));
            }}
          >
            {state === 'running' ? (
              <input type='checkbox' defaultChecked></input>
            ) : (
              <input type='checkbox'></input>
            )}
            <i></i>
          </label>
        </div>
        <div className='ea-btn'>
          <div className='toggleText'>Get Data</div>
          <label
            className='form-switch'
            id={`dataButton${id}`}
            onChange={() => {
              if (state === 'running') {
                const individualData = updateMemoryState(id);
                const individualCpuData = updateCpuState(id);

                dispatch(toggleData(id));

                let dataToggleBtn = document.getElementById(
                  `dataCheckmark${id}`
                );

                if ((dataToggleBtn as HTMLInputElement).checked) {
                  if (individualData && individualCpuData) {
                    dispatch(addMemory(individualData));
                    dispatch(addCpu(individualCpuData));
                  }
                } else {
                  if (id) {
                    dispatch(deleteMemory(id));
                    dispatch(deleteCpu(id));
                  }
                }
              } else console.log('Container not running');
            }}
          >
            <input id={`dataCheckmark${id}`} type='checkbox'></input>
            <i></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Container;

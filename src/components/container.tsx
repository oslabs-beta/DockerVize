import React from 'react';
import { ObjectElement, AllStates } from '../types';
import { useDispatch, useSelector } from 'react-redux';
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
  let { data } = useGetMemoryDataQuery();

  let cpuData = useGetCPUDataQuery().data;

  // if (cpuData) {
  //   console.log('cpu:', cpuData[0].id);
  // }

  //Get actual state
  //check if dataState for this id is true
  //If true, set interval to query data again
  const trueState: any = useSelector((state: AllStates) => state);
  // console.log('trueState: ', trueState['statusToggle'][id]);
  if (trueState['statusToggle'][id]['dataState']) {
    // let { data } = useGetMemoryDataQuery();
    // console.log(trueState['statusToggle'][id].memoryState[0]);
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

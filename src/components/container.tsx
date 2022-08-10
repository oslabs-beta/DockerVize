import React from 'react';
import { ObjectElement } from '../types';
import { useDispatch } from 'react-redux';
import {
  toggleStatus,
  toggleData,
  addMemory,
  deleteMemory,
} from '../reducers/containerStatusSlice';
import { useGetDataQuery } from '../services/containerQuery';

const Container: React.FC<ObjectElement> = (props) => {
  const { name, state, id } = props;

  const dispatch = useDispatch();

  let { data } = useGetDataQuery(undefined, { pollingInterval: 3000 });

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

                dispatch(toggleData(id));

                let dataToggleBtn = document.getElementById(
                  `dataCheckmark${id}`
                );

                if ((dataToggleBtn as HTMLInputElement).checked) {
                  if (individualData) {
                    dispatch(addMemory(individualData));
                  }
                } else {
                  if (id) {
                    dispatch(deleteMemory(id));
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

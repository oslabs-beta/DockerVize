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
  const { data } = useGetDataQuery();

  const updateMemoryState = (id: string) => {
    if (data) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].metric.id.slice(8, 20) === id) {
          console.log(data[i]);
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
              <input type='checkbox' checked></input>
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
                const data = updateMemoryState(id);

                dispatch(toggleData(id));

                let remember = document.getElementById(`dataCheckmark${id}`);

                if ((remember as HTMLInputElement).checked) {
                  if (data) {
                    dispatch(addMemory(data));
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

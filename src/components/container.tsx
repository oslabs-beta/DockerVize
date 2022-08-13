import React from 'react';
import { ObjectElement } from '../types';
import { useDispatch } from 'react-redux';
import { toggleStatus, toggleData } from '../reducers/containerStatusSlice';

const Container: React.FC<ObjectElement> = (props) => {
  const { name, state, id } = props;

  const dispatch = useDispatch();

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
                dispatch(toggleData(id));
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

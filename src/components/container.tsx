import React from 'react';
import { ObjectElement } from '../services/containerQuery';

const Container: React.FC<ObjectElement> = (props) => {
  const { name, state, id } = props;

  return (
    <div className='container'>
      <div>
        <span>{name}</span>
      </div>
      <div className='btns'>
        <div className='ea-btn'>
          <div className='toggleText'>On/Off</div>
          <label className='form-switch' id={`onButton${id}`}>
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
          <label className='form-switch' id={`dataButton${id}`}>
            <input type='checkbox'></input>
            <i></i>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Container;

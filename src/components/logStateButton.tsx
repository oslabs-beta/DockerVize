import React from 'react';
import { useDispatch } from 'react-redux';
import { logStateButton } from '../reducers/containerStatusSlice';

export default function LogStateButton() {
  const dispatch = useDispatch();
  return (
    <div className='header-component'>
      <button
        onClick={() => {
          dispatch(logStateButton());
        }}
      >
        Log State
      </button>
    </div>
  );
}

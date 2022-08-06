import React from 'react';
import { useDispatch } from 'react-redux';
import { quitButton } from '../reducers/containerStatusSlice';

export default function QuitButton() {
  const dispatch = useDispatch();
  return (
    <div className='header-component'>
      <button
        onClick={() => {
          dispatch(quitButton());
        }}
      >
        Log State
      </button>
    </div>
  );
}

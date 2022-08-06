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
      />
      <button className='cta'>
        <span>Log State</span>
        <svg viewBox='0 0 13 10' height='10px' width='15px'>
          <path d='M1,5 L11,5'></path>
          <polyline points='8 1 12 5 8 9'></polyline>
        </svg>
      </button>
    </div>
  );
}

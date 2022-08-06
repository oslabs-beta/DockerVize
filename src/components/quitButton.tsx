import React from 'react';
import { useDispatch } from 'react-redux';
import { quitButton } from '../reducers/containerStatusSlice';

// let dispatch = useDispatch();

// const QuitButton: React.FC = () => (
//   <div className='header-component'>
//     <button
//       onClick={() => {
//         dispatch(quitButton);
//       }}
//     >
//       Quit
//     </button>
//   </div>
// );

// export default QuitButton;

export default function QuitButton() {
  const dispatch = useDispatch();
  return (
    <div className='header-component'>
      <button
        onClick={() => {
          dispatch(quitButton());
        }}
      >
        Get State!!!
      </button>
    </div>
  );
}

////store
// import { configureStore } from '@reduxjs/toolkit'

// export const store = configureStore({
//   reducer: {},
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

// import React from 'react'
// import type { RootState } from '../../app/store'
// import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from './counterSlice'

// export function Counter() {
//   const count = useSelector((state: RootState) => state.counter.value)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>
//         <button
//           aria-label="Increment value"
//           onClick={() => dispatch(increment())}
//         >
//           Increment
//         </button>
//         <span>{count}</span>
//         <button
//           aria-label="Decrement value"
//           onClick={() => dispatch(decrement())}
//         >
//           Decrement
//         </button>
//       </div>
//     </div>
//   )

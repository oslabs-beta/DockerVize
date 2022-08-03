import React from 'react';

const Component = ({ label, text }) => (
  <p>
    <span>Docker Containers</span>
    {/* <strong>{`${label}: `}</strong>
    <strong>{text}</strong> */}
    <div>
      <label class='form-switch'>
        <input type='checkbox'></input>
        <i></i>
      </label>
    </div>
  </p>
);

export default Component;

import React from 'react';
import { ObjectElement } from '../types';
import { useDispatch } from 'react-redux';
import { toggleStatus, toggleData } from '../reducers/containerStatusSlice';

const Container: React.FC<ObjectElement> = (props) => {
  const { name, state, id } = props;

  const dispatch = useDispatch();

  // var e = (document.getElementById("organization")) as HTMLSelectElement;
  // var sel = e.selectedIndex;
  // var opt = e.options[sel];
  // var CurValue = (<HTMLSelectElement>opt).value;
  // var CurText = (<HTMLSelectElement>opt).text;

  const updateContainerStatus = (id: string) => {
    const select = document.getElementById(
      `dropdown${id}`
    ) as HTMLSelectElement;
    const output = select.value;
    console.log('Dropdown Value: ', output);
    //Send query using output and name
    //Endpoints: start stop pause unpause
    return output;
  };

  return (
    <div className='container'>
      <div>
        <span>{name}</span>
      </div>
      <div className='btns'>
        <div className='ea-btn'>
          <div className='toggleText'>Status</div>
          <select
            id={`dropdown${id}`}
            onChange={() => {
              updateContainerStatus(id);
              dispatch(
                toggleStatus({
                  id: id,
                  name: name,
                  state: updateContainerStatus(id),
                })
              );
            }}
          >
            {state === 'running' ? (
              <option value='running' selected>
                Running
              </option>
            ) : (
              <option value='running'>Running</option>
            )}
            {state === 'exited' ? (
              <option value='exited' selected>
                Exited
              </option>
            ) : (
              <option value='exited'>Exited</option>
            )}
            {state === 'paused' ? (
              <option value='paused' selected>
                Paused
              </option>
            ) : (
              <option value='paused'>Paused</option>
            )}
          </select>
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

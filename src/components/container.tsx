import React from 'react';
import { ObjectElement } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleStatus,
  toggleData,
  // toggleDataOff,
} from '../reducers/containerStatusSlice';
import { AllStates } from '../types';

const Container: React.FC<ObjectElement> = (props) => {
  //state is a little misleading because it's just the name of a property
  const { id } = props;
  //This is the real state

  const containerState = useSelector((state: AllStates) => state);
  // console.log('containerState? : ', containerState);

  const containerStatusToggle: any = containerState.statusToggle;
  let containerStatus = containerStatusToggle[id].statusState;
  const name = containerStatusToggle[id].name;
  // let state = containerStatus;

  const dispatch = useDispatch();

  const updateContainerStatus = (id: string) => {
    const select = document.getElementById(
      `dropdown${id}`
    ) as HTMLSelectElement;
    const selectedOption = select.value;
    changeContainerStatusInDockerDesktop(name, selectedOption);
    return selectedOption;
  };

  const changeContainerStatusInDockerDesktop = (
    name: string,
    status: string
  ) => {
    const body = { name: name };

    let actionString;
    if (status === 'paused') {
      actionString = 'pause';
    } else if (status === 'exited') {
      actionString = 'stop';
    } else if (status === 'running' && containerStatus === 'paused') {
      actionString = 'unpause';
    } else {
      actionString = 'start';
    }

    let action = actionString;

    fetch(`http://localhost:3000/container/${action}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify(body),
    });
  };
  if (name === '/epic_cerf') {
    // console.log('id:', id);
    // console.log('container state: ', [name, containerStatus]);
  }
  return (
    <div className='container'>
      <div>
        <span>{name}</span>
      </div>
      <div className='btns'>
        <div className='ea-btn'>
          <div className='toggleText'>Status</div>
          {name !== '/cadvisor' && name !== '/prometheus' ? (
            <select
              value={containerStatus}
              id={`dropdown${id}`}
              onChange={() => {
                let previousContainerStatus = containerStatus;
                let selectedOption = updateContainerStatus(id);
                dispatch(
                  toggleStatus({
                    id: id,
                    name: name,
                    state: selectedOption,
                  })
                );
                //If previous data state was running and current status state is not running - then dispatch toggle data
                if (
                  previousContainerStatus === 'running' &&
                  selectedOption !== 'running' &&
                  containerStatusToggle[id].dataState
                ) {
                  dispatch(toggleData(id));
                  console.log([previousContainerStatus, selectedOption]);
                }
              }}
            >
              <option value='running'>Running</option>
              <option value='paused'>Paused</option>
              <option value='exited'>Exited</option>
            </select>
          ) : (
            <>
              <p>Running</p>
            </>
          )}
        </div>
        <div className='ea-btn'>
          {containerStatus !== 'running' ? (
            <>
              <div
                // onLoad={() => dispatch(toggleDataOff(id))}
                style={{ marginRight: '63px' }}
              ></div>
            </>
          ) : (
            <>
              <div className='toggleText'>Get Data</div>
              <label
                className='form-switch'
                id={`dataButton${id}`}
                onChange={() => {
                  if (containerStatus === 'running') {
                    dispatch(toggleData(id));
                  } else console.log('Container not running');
                }}
              >
                {containerStatus !== 'running' ? (
                  <>
                    <input
                      id={`dataCheckmark${id}`}
                      type='checkbox'
                      disabled
                    ></input>
                  </>
                ) : (
                  <input id={`dataCheckmark${id}`} type='checkbox'></input>
                )}
                <i></i>
              </label>
            </>
          )}
          {/* Instead of Get Data toggle, spawn empty obj/space */}
        </div>
      </div>
    </div>
  );
};

export default Container;

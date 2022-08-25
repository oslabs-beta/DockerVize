import React from 'react';
import { ObjectElement } from '../types';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleStatus,
  toggleData,
} from '../reducers/containerStatusSlice';
import { AllStates } from '../types';

const Container: React.FC<ObjectElement> = (props) => {
  //ID received from data query
  const { id } = props;

  //Global state of containers
  //Status Toggle is where Global State is stored after using useSelector
  const containerState = useSelector((state: AllStates) => state);
  const containerStatusToggle: any = containerState.statusToggle;

  //Extract container name from Global state
  let containerStatus = containerStatusToggle[id].statusState;
  const name = containerStatusToggle[id].name;

  const dispatch = useDispatch();

  //Updates html elements with container status
  const updateContainerStatus = (id: string) => {
    const select = document.getElementById(
      `dropdown${id}`
    ) as HTMLSelectElement;
    const selectedOption = select.value;
    changeContainerStatusInDockerDesktop(name, selectedOption);
    return selectedOption;
  };

  //Sends request to backend to invoke Docker functionality
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

  return (
    <div className='container'>
      <div>
        <span>{name}</span>
      </div>
      <div className='btns'>
        <div className='ea-btn'>
          <div className='toggleText'>Status:</div>
          
          {//If container is not CAdvisor or Prometheus - enable changing container status
          name !== '/cadvisor' && name !== '/prometheus' ? (
            <>
              <div className='customSelect'>
                <select
                  value={containerStatus}
                  id={`dropdown${id}`}
                  onChange={() => {
                    let previousContainerStatus = containerStatus;
                    //Extract container status from HTML element selected in form
                    let selectedOption = updateContainerStatus(id);
                    //Updates Global state based on selected status
                    dispatch(
                      toggleStatus({
                        id: id,
                        name: name,
                        state: selectedOption,
                      })
                    );
                    //If previous data state was running and current status state is not running (User turned container off)
                    //then dispatch toggle data to turn off metrics
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
                <span className='customArrow'></span>
              </div>
            </>
          ) : (//Otherwise - if container is CAdvisor or Prometheus - disable changing container status
            <>
              <p>Running</p>
            </>
          )}
        </div>
        <div className='ea-btn'>
          {containerStatus !== 'running' ? (
            <>
              {/* Remove Get Data Toggle */}
              <div style={{ marginRight: '50px' }}></div>
            </>
          ) : (
            <>
              <div className='toggleText'>Get Data</div>
              <label
                className='form-switch'
                id={`dataButton${id}`}
                onChange={() => {
                  //When Get Data toggle button is changed - update Global state
                  if (containerStatus === 'running') {
                    dispatch(toggleData(id));
                  } else console.log('Container not running');
                }}
              >
                {//Initial idea to disable Get Data button when container is off
                //Currently not being used
                containerStatus !== 'running' ? (
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
        </div>
      </div>
    </div>
  );
};

export default Container;

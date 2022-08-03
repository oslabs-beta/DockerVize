import React from 'react';
import Component from './components/component';
import { hot } from 'react-hot-loader/root';

class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          <Component />
        </h1>
      </>
    );
  }
}

export default hot(App);

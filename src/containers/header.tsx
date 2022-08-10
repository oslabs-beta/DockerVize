import React from 'react';
import QuitButton from '../components/quitButton';

const Header: React.FC = () => (
  <div className='header-container'>
    <h1>DockerVize</h1>
    <QuitButton />
  </div>
);

export default Header;

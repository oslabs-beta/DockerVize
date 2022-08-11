import React from 'react';
import QuitButton from '../components/quitButton';
// import transparentLogo from 'assets/transparentLogo.svg';

const Header: React.FC = () => (
  <div className='header-container'>
    <img src='../assets/transparentLogo.svg' />
    {/* <h1>DockerVize</h1> */}

    <QuitButton />
  </div>
);

export default Header;

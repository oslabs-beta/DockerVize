import React from 'react';
import LogStateButton from '../components/logStateButton';
import transparentLogo from '../assets/wordpressTransparent.png';

const Header: React.FC = () => (
  <div className='header-container'>
    <div className='header-left'>
      <img className='logo' src ={transparentLogo}/>
      <h1 className='header-left-text'>DockerVize</h1>
    </div>
    <div className='header-right'>
      <LogStateButton />
    </div>
  </div>
);

export default Header;

import React from 'react';
import LogStateButton from '../components/logStateButton';
import transparentLogo from '../assets/wordpressTransparent.png';

const Header: React.FC = () => (
  <div className='header-container'>
    <img src ={transparentLogo}/>
    <h1>DockerVize</h1>
    <LogStateButton />

  </div>
);

export default Header;

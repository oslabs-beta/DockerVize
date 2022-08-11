import React from 'react';
import QuitButton from '../components/quitButton';
import transparentLogo from '../assets/wordpressTransparent.png';

//import originalLogo from '../assets/originalLogo.png';

const Header: React.FC = () => (
  <div className='header-container'>
    <img src ={transparentLogo}/>
    <h1>DockerVize</h1>
    <QuitButton />

  </div>
);

export default Header;

import React from 'react';
import { useState, useEffect } from 'react';
import usePhoneMode from '../../hooks/usePhoneMode';
import Tab from '../Tab/Tab';
import styles from './Navbar.module.css';


function Navbar() {

  const [dropped, setDropped] = useState(false);
  const [phoneMode] = usePhoneMode();

  return (

    <nav className={styles.Navbar}>

      <img className={styles.logo} src="/assets/sticky.svg" alt="logo"></img>

      <ul 
        className={ styles.Tabs }
        style={ dropped ? { bottom: '0', opacity: '1'} : null }
      > {/* tabs = tab container */}
        <Tab path="/" descriptor={ !phoneMode ? 'home' : '🏡' } blobNum={1}/>
        <Tab path="/me" descriptor={ !phoneMode ? 'me' : '👨‍🔧' } blobNum={1}/>
        <Tab path="/projects" descriptor={ !phoneMode ? 'projects' : '🖥' } blobNum={1}/>
        <Tab path="/experience" descriptor={ !phoneMode ? 'experience' : '📂' } blobNum={1}/>
        <Tab path="/contact" descriptor={ !phoneMode ? 'contact' : '📱' } blobNum={4}/>
      </ul>

      <div 
        className={styles.Arrow} 
      >
          <img 
            src="/assets/arrow.svg"
            onClick={() => { setDropped(!dropped) }}
            className={ dropped ? styles.Up : styles.Down }
        ></img>

      </div>

    </nav>
  );
}

export default Navbar;

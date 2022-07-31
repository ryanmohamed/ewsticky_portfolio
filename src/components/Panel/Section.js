import React from 'react';
import styles from './Panel.module.css';


function Section(props) {
  const { src , content } = props;

  return (
    <div className={styles.Section}>
        
    <div className={styles.Banner}
    style={{
      background: `url(${src})`,
    }}></div>
    
    <div className={styles.Content}
    style={{ backgroundColor: `rgb(${Math.random() * 255}, 0,${Math.random() * 255})`}}>
      {props.children && props.children}
    </div>
    
    </div>
  );
}

export default Section;
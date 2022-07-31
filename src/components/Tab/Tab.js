import styles from './Tab.module.css';
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Tab(props) {
    
    const [open, setOpen] = useState(false);

    return (
        <li className={styles.Tab}>
 
           
            <Link className={styles.Link} to={props.path} 
                  onClick={ (e) => {
                    setOpen(!open);
                    props.backToParent(props.path);
                  } 
            }> 
                <span>{props.descriptor}</span>
                <img className={styles.Svg} src={`./assets/blob${props.blobNum}.svg`} alt="blob1" />
            </Link>

            {/* conditionally render children if open */}
            { open && props.children }

        </li>
    );
}

export default Tab;

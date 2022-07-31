import React from 'react';
import styles from './Spinner.module.css';

function Spinner(props) {
    return (
        <div className={styles.Container}>
        <svg className={styles.Spinner} viewBox="0 0 50 50">
            <circle className={styles.Path} cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>
        <span className={styles.Message}>Loading your 3D environment...</span>
        </div>
    );
}

export default Spinner;
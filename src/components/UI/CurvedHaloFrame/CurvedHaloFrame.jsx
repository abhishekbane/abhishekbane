import React from 'react';

import styles from './CurvedHaloFrame.module.css';

export const curvedHaloYellow = ( props ) => {
    return (
        <div className={ styles.curvedHaloYellow }>
            { props.children }
        </div>
    );
};

export const curvedHaloBlue = ( props ) => {
    const classes = `${styles.curvedHaloBlue} ${ props.disableHalo ? "" : styles.curvedHaloBlueHover }`

    return (
        <div className={ classes }>
            { props.children }
        </div>
    );
};
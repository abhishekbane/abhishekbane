import React from 'react';

import styles from './CurvedHaloFrame.module.css';

export const curvedHaloYellow = ( props ) => {

    const classes = `${styles.curvedHaloYellow} ${ props.disableHalo ? "" : styles.curvedHaloYellowHover }`

    return (
        <div className={ classes }>
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
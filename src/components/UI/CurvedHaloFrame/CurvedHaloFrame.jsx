import React from 'react';

import styles from './CurvedHaloFrame.module.css';

export const curvedHaloYellow = ( props ) => {
    const halo = props.disableHalo ? "" : styles.curvedHaloYellowHover;
    const classes = `${styles.curvedHaloYellow} ${styles.curvedHalo} ${ halo }`

    return (
        <div className={ classes }>
            { props.children }
        </div>
    );
};

export const curvedHaloBlue = ( props ) => {
    const halo = props.disableHalo ? "" : styles.curvedHaloBlueHover;
    const classes = `${styles.curvedHaloBlue} ${ styles.curvedHalo } ${ halo }`

    return (
        <div className={ classes }>
            { props.children }
        </div>
    );
};
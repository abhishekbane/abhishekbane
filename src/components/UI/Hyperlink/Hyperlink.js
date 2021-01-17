import React from 'react';

import styles from './Hyperlink.module.css';

export const hyperlinkYellow = ( props ) => {

    return (
        <a className={ `${styles.hyperlink} ${styles.yellow}` } rel="noreferrer" href={ props.href } target={ props.target }>
            { props.children }
        </a>
    );
};

export const hyperlinkBlue = ( props ) => {

    return (
        <a className={ `${styles.hyperlink} ${styles.blue}` }  rel="noreferrer" href={ props.href } target={ props.target }>
            { props.children }
        </a>
    );
};
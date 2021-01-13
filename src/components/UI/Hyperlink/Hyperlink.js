import React from 'react';

import styles from './Hyperlink.module.css';

const hyperlink = ( props ) => {
    return (
        <a className={ styles.hyperlink } href={ props.href } target={ props.target }>
            { props.children }
        </a>
    );
};

export default hyperlink;
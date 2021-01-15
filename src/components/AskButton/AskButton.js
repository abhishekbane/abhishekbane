import React, { useState } from 'react';


import styles from './AskButton.module.css';

import chat from '../../chat.svg'

const AskButton = ( props ) => {

    let buttonClasses = `${styles.askButton} ${ props.isHaloVisible ? styles.showHalo : styles.removeHalo}`

    return (
        <button onClick={ props.onClick } title="Select a question to ask" className={ buttonClasses }>
            <img 
                style={{
                    width: props.size
                }}
                className={ styles.askIcon }
                aria-hidden="true"
                src={ chat } />
        </button>
    );
};

export default AskButton;
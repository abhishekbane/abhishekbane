import React from 'react';

import styles from './Paragraphs.module.css';

const paragraphs = (props) => {

    const paras = props.children.split("\n").map( (text, index) => (
        <p 
            style={ { fontSize: props.fontSize, margin: props.margin } } 
            key={ index } 
            className={styles.paragraph}>
            {text}
        </p> 
    ));

    return (paras);
};

export const paragraph = (props) => {
    return (
        <p 
            style={ { fontSize: props.fontSize, margin: props.margin } } 
            className={styles.paragraph}>
            {props.children}
        </p>
    );
};

export default paragraphs;
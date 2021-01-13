import React from 'react';

import styles from './Paragraphs.module.css';

const paragraphs = (props) => {

    const paras = props.children.split("\n").map( (text, index) => <p key={ index } className={styles.paragraph}>{text}</p> );

    return (paras);
};

export default paragraphs;
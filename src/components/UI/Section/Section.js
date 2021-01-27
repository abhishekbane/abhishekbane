import React from 'react';

import { curvedHaloYellow as CurvedHaloFrame } from '../../UI/CurvedHaloFrame/CurvedHaloFrame';

import styles from './Section.module.css';

const section = ( props ) => {
    return (
        <section className={ styles.section }>
            <CurvedHaloFrame responsive width="" disableHalo>
                <h3 className={ styles.heading }>{ props.heading }</h3>
                <p  className={ styles.anchor } id={ props.anchorId }>anchor</p>
                { props.children }
            </CurvedHaloFrame>  
        </section>
    );
};

export default section;
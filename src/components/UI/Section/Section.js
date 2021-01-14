import React from 'react';

import { curvedHaloYellow as CurvedHaloFrame } from '../../UI/CurvedHaloFrame/CurvedHaloFrame';

import styles from './Section.module.css';

const section = ( props ) => {
    return (
        <section className={ styles.section }>
            <CurvedHaloFrame width="" disableHalo>
                <h3 className={ styles.heading }>{ props.heading }</h3>
                <a  className={ styles.anchor } id={ props.anchorId }>anchor</a>
                { props.children }
            </CurvedHaloFrame>  
        </section>
    );
};

export default section;
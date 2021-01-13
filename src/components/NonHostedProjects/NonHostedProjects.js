import React from 'react';

import { curvedHaloYellow as CurvedHaloYellow } from '../UI/CurvedHaloFrame/CurvedHaloFrame';

import arrowRight from '../../arrow-right.svg'

import styles from './NonHostedProjects.module.css';

const nonHostedProjects = () => {
    return (
        <CurvedHaloYellow>
            <a href="https://github.com/abhishekbane/" target = "_blank" className={ styles.nonHostedProjects }>
                Checkout on Github
                <img src={arrowRight} alt=">"/>
            </a>
        </CurvedHaloYellow>
    );
};

export default nonHostedProjects;